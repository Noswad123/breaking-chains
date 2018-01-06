var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();
var port=3000;
var api=require('./server/routes/api')


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',api);

app.get('*',(req,res)=>{

    res.sendFile(path.join(__dirname,'public/index.html'))

});

app.listen(port,function(){
    console.log("Server running on localhost:"+ port);
})
module.exports = app;
