const express = require('express');
const path = require('path');

const app = express();

const port = 4000;

app.use(express.static('public')); 

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname +'/index.html'));
});

app.listen(port, (req,res)=>{
    console.log('Server start on port 4000')
});

