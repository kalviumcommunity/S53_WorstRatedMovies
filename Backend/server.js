
const express = require("express")
const app = express();
const movieData = require("./init/database")
const isConnected = require("./init/database")
const cors = require('cors')
app.use(cors())

app.get('/ping',(req,res)=>{
    res.send("hello express!")
})

app.listen(3000,()=>{
    console.log("server running in port 3000")
})

app.use(express.json())

// Define the ping route
app.get('/data', (req, res) => {
  res.send(movieData);
});


app.post('/data/api', (req, res) => {
  let body=req.body
  res.status(201).json({
    message:"Post Request Success",
    data:body
})

});

const router = require("./Routes/routes")
app.use('/api',router)



// for displaying the connection status 
app.get('/', async (req, res) => {
  const dbStatus = isConnected ? 'connected' : 'disconnected';
  res.send({
    database: dbStatus,
  });
});

