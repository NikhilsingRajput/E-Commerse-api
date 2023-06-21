const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const router = require('./routes');

const port = 6000;

mongoose.connect('mongodb+srv://nikhilsingrajput2016:nikhil123@surveyforms.uwmob15.mongodb.net/?retryWrites=true&w=majority',{
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
