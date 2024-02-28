const express = require('express')
// const mongoose = require('mongoose')
const app = express.Router()
const userdata = require('./Models/schema')
require("dotenv").config()
const { Validation, ValidationSignup } = require('./Utils/Validation')
const User = require('./Models/user')
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken'); 



// // Connect to your local MongoDB instance
// mongoose.connect(process.env.MONGO_KEY , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then(() => console.log('Connected to local MongoDB'))
//     .catch(err => console.error('Error connecting to local MongoDB:', err));  

// function for validation 
const validatingPost = (req, res, next) => { 
    let { error } = Validation.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    else {
      next();
    }
  };

// signup validation function 
  const validateUser = (req, res, next) => {
    const { error } = ValidationSignup.validate(req.body);
    if (error) {
      // Return a 400 error if validation fails
      return res.status(400).send(error.details[0].message);
    } else {
      next();
    }
}; 


// sign in schema 
const SigninSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

//read
app.use(express.json());
app.get('/',async (req,res)=>{
    // const data = await userdata.find({})
    const data = await userdata.find({})
    res.json({success : true , data : data})

})
  // getting user data 

  app.get('/user',async (req,res)=>{
    const data = await User.find({})
  
    res.json({success : true , data : data})
  
  })

// get data by id 
app.get('/:id', async (req, res) => {
    try {
        const id = req.params.id; // Extracting user ID from the request parameters
        const data = await userdata.findById(id); // Finding the user by ID
         
        if (!data) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        
        res.json({ success: true, data: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


// create data 
app.post("/create",validatingPost,async (req,res)=>{
    console.log(req.body)
    const data = new userdata(req.body)
    await data.save()
    res.send({success : true , message : "data saved successfully"})
});

// update data by id 
app.put("/update/:id", validatingPost,async (req, res) => {  
    const id = req.params.id; // Corrected from req.params._id to req.params.id
    const newData = req.body
    console.log(newData)

    try {
        const data = await userdata.findOneAndUpdate({ _id: id }, newData, { new: true });

        if (!data) {
            return res.status(404).send({ success: false, message: "Data not found" });
        }
        res.send({ success: true, message: "Data updated successfully", data: data });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});

// // update data by username to change username
// app.put("/update/:username",async (req,res)=>{
//     let newData = req.body.UserName;
//     let username = req.params.username;
//     const data = await userdata.findOneAndUpdate({ UserName: username }, { UserName: newData })
//     res.send({success : true , message : "data updated successfully"})
// })

//delete data
app.delete("/delete/:id",async (req,res)=>{
    const id  = req.params.id
    console.log(id)
    const data = await userdata.deleteOne({_id : id})
    res.send({success : true , message : "data deleted successfully"})

})

 
// sign up 
app.post("/signup" ,validateUser,async (req, res) => {
    const { fullname,username,email, password } = req.body;
  
    try {
      // Check if the username already exists
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.json({ message: 'email already exists' });
      }



    //   password hashing 
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password,salt);

      const newUser = new User({
        fullname,
        username,
        email,
        password:hashedPassword,
        
      });

  
      await newUser.save();
      // console.log(req.body._id);
      const token = jwt.sign({ result: req.body.username }, `${process.env.SECRET}`, { expiresIn: '7d' });

            // Set the JWT token as a cookie
            // res.cookie('Token', token, { maxAge: 7 * 24 * 60 * 60 * 1000, path: '/' });
            
      // res.status(200).json({message:'signed up',TOKEN: token});
      

      res.status(201).json({ message: 'User registered successfully',TOKEN: token });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })




  //sign in
  app.post("/signin",async(req,res) =>{
    try{
        const {error} = SigninSchema.validate(req.body);
        if(error) return res.status(400).json({error: error.details[0].message});

        const {username,password} = req.body;
        
        const user = await User.findOne({username});
        
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid Username or Password"});
        }
        const token = jwt.sign({ result: user.username }, `${process.env.SECRET}`, { expiresIn: '7d' });

            // Set the JWT token as a cookie
            // res.cookie('Token', token, { maxAge: 7 * 24 * 60 * 60 * 1000, path: '/' });
            
            res.status(200).json({message:'Logged in',TOKEN: token});
       

        
        
        res.status(200).json({
            email:user.email,
            fullname:user.fullname,
            // usernamecookie:
            // token:user.token
        });
        
    }catch(error){
        console.log("Error in Login Controller",error.message);
        res.status(500).json({"error":"Internal Server Error"});
    }
})


module.exports = app;