var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var holeSchema=new Schema({
    holeNum:Number,
    distance:Number,
    par: Number,
    total:Number

})

module.exports=mongoose.model('hole',holeSchema,'holes');