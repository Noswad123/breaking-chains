var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var holeSchema=new Schema({
    holeNum:Number,
    distance:Number,
    par: Number

})

var courseSchema=new Schema({

    name: String,
    location: String,
    holes:holeSchema[]



});

module.exports=mongoose.model('course',courseSchema,'courses');