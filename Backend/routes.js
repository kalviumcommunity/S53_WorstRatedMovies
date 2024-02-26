const express = require('express')
const mongoose = require('mongoose')
const app = express.Router()
const userdata = require('./Models/schema')
require("dotenv").config()
const { Validation } = require('./Utils/Validation')
  

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

//read

app.use(express.json());
app.get('/',async (req,res)=>{
    const data = await userdata.find({})

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

module.exports = app;