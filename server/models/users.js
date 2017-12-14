var mongoose=require('mongoose');
var crypto=require('crypto');
var jwt=require('jsonwebtoken');
//var Hole=mongoose.model('hole',holeSchema);

var Schema=mongoose.Schema;




class Player{
   
}

var userSchema =new Schema({

    
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    friends: [],
    playerInfor:{},
    myDiscs:[],
    favCourses:[],
    stats: String,
    _id:String

});
/*
userSchema.methods.setPassword=function(password){
    this.salt=crypto.randomBytes(16).toString('hex');
    this.hash=crypto.pbkdf2Sync(password,this.salt, 1000,64).toString('hex');
};


userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
  };



var ProjectSchema = new mongoose.Schema({
    name: String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});*/

module.exports=mongoose.model('user',userSchema,'users');