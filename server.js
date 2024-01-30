const express = require("express")
const app = express();


app.listen(3000,()=>{
    console.log("server running in port 3000")
})

app.get('/ping',(req,res)=>{
    res.send("hello express!")
})

app.get('/',(req,res)=>{
    res.send("WELCOME TO MY HOMEPAGE")
})