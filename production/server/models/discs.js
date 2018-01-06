var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var discSchema =new Schema({

    Name: String,
    Manufacturer: String,
    Distance: Number,
    Turn:String,
    Fade:String

});

module.exports=mongoose.model('disc',discSchema,'discs');