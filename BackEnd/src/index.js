const express = require('express');
const app = express();

app.get('/cadUsers', (req,res)=>{res.status(200).send("HELO WORDL")});

app.listen(8888,() => console.log("Server is running, on port 8888"));