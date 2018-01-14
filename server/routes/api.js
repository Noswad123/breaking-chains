var express=require('express');
var router =express.Router();
var mongoose=require('mongoose');
var Disc=require('../models/discs');
var User=require('../models/users');

var db= "mongodb://jamallin:jamal@ds127872.mlab.com:27872/exeterj";
mongoose.Promise=global.Promise;

mongoose.connect(db,function(err){
    if(err){
        console.log("something went wrong");
    }
});
router.get('/discs',function(req,res){
    console.log("get request for all discs");
    Disc.find({}).exec(function(err,discs){

        if(err){
            console.log("Error getting discs");

        }else{

            res.json(discs);

        }

    });
});

router.get('/disc/:id',function(req,res){
    console.log("get request for a single disc");
    Disc.findById(req.params.id).exec(function(err,disc){

        if(err){
            console.log("Error getting disc");

        }else{

            res.json(disc);

        }

    });
});

router.post('/disc',function(req,res){
    console.log("post a video");
    var newDisc=new Disc();
    newDisc.Name=req.body.Name;
    newDisc.Manufacturer=req.body.Manufacturer;
    newDisc.Distance=req.body.Distance;
    newDisc.Fade=req.body.Fade;
    newDisc.Turn=req.body.Turn;

    newDisc.save(function(err, insertedDisc){
        if(err){
            console.log("Error saving the disc");
        }else{
            res.json(insertedDisc);
        }

    });
});

router.put('/disc/:id', function(req,res){
    console.log("Update Disc");
    Disc.findByIdAndUpdate(req.params.id,{
        $set:{Name: req.body.name, Manufacturer:req.body.Manufacturer,Distance:req.body.Distance,Fade:req.body.Fade,Turn:req.body.Turn}
    },
{
    new:true
},
function(err,updatedDisc){
   if(err){
        res.send("Error updating disc");
    }else{
            res.json(updatedDisc);
    }
});
});

router.delete('/disc/:id',function(req,res){
    console.log("Deleting a disc");
    Disc.findByIdAndRemove(req.params.id, function(err, deletedDisc){
            if(err){
                res.send("Error deleting video");
            }else{
                res.json(deletedDisc);
            }
    });
});





//users
router.delete('/user/:id',function(req,res){
    console.log("Deleting a user");
    User.findByIdAndRemove(req.params.id, function(err, deletedUser){
            if(err){
                res.send("Error deleting user");
            }else{
                res.json(deletedUser);
            }
    });
});
router.get('/users',function(req,res){
    console.log("get request for all users");
    User.find({}).exec(function(err,users){

        if(err){
            console.log("Error getting users");

        }else{

            res.json(users);

        }

    });
});

router.get('/user/:id',function(req,res){
    console.log("get request for a single user");
    User.findById(req.params.id).exec(function(err,user){

        if(err){
            console.log("Error getting user");

        }else{

            res.json(user);

        }

    });
});

router.post('/user',function(req,res){
    console.log("post a user");
    var newUser=new User();
    newUser.firstName=req.body.firstName;
    newUser.lastName=req.body.lastName;
    //Need to investigate how to add user name (a property under player info)
    newUser.playerInfo=req.body.playerInfo;
    newUser.email=req.body.email;
    newUser.password=req.body.password;
    newUser.friends=[];
    newUser.myDiscs=[];
    newUser.favCourses=[];
    newUser.stats="";

    newUser._id=req.body._id;//Math.floor(Math.random()*100);
 

    newUser.save(function(err, insertedUser){
        if(err){
            console.log("Error saving the user: "+ err);
        }else{
            res.json(insertedUser);
        }

    });
});

router.put('/user/:id', function(req,res){
    console.log("Update User");
   User.findByIdAndUpdate(req.params.id,{
        $set:{
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
             password:req.body.password,
            favCourses:req.body.favCourses,
            myDiscs:req.body.myDiscs,
            stats:req.body.stats,
            friends:req.body.friends,
            playerInfo: req.body.playerInfo
        }
    },
{
    new:true
},
function(err,updatedUser){
   if(err){
        res.send("Error updating user");
    }else{
            res.json(updatedUser);
    }
});
});


module.exports=router;