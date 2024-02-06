const express = require('express')
const mongoose = require('mongoose')
const app = express.Router()
const userdata = require('../Models/schema')
require("dotenv").config()

// // Connect to your local MongoDB instance
// mongoose.connect(process.env.MONGO_KEY , {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then(() => console.log('Connected to local MongoDB'))
//     .catch(err => console.error('Error connecting to local MongoDB:', err));

//read
app.get('/',async (req,res)=>{
    const data = await userdata.find({})

    res.json({success : true , data : data})

})

// create data 
app.post("/create",async (req,res)=>{
    console.log(req.body)
    const data = new userdata(req.body)
    await data.save()
    res.send({success : true , message : "data saved successfully"})
})


// update data 
app.put("/update/:username",async (req,res)=>{
    let newData = req.body.UserName;
    let username = req.params.username;
    const data = await userdata.findOneAndUpdate({ UserName: username }, { UserName: newData })
    res.send({success : true , message : "data updated successfully"})

})

//delete data
app.delete("/delete/:id",async (req,res)=>{
    const id  = req.params.id
    console.log(id)
    const data = await userdata.deleteOne({_id : id})
    res.send({success : true , message : "data deleted successfully"})

})

module.exports = app;