const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const router = require('./routes');

const port = 6000;

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1',{
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("connected to local cloud database")
})

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/',router)

app.listen(port , ()=>{
    console.log('app running on 6000 port')
})
