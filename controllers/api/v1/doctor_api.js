const Doctor=require('../../../models/doctor');
const Patient=require('../../../models/patient');
const jwt=require('jsonwebtoken');

module.exports.register=async function(req,res){
    if(!req.body.name || req.body.name || req.body.password){
        return res.json(200,{message:"Please fill all the required field"});
    }
    try{
     await Doctor.findOne({
         email:req.body.email
     },function(err,user){
         if(err){
             return res.json(400,{
                 message:"Username already exist"
             });
         }

         if(!user){
             Doctor.create({
                 name:req.body.name,
                 email:req.body.email,
                 password:req.body.password
             });
             return res.json(200,{
                 message:"registered successfully"
             });
         }
     });
    }catch(err){
       return res.json({
           message:"Internal Server Error"
       });
    }
}


module.exports.login=async function(req,res){
    try{
      let doctor=await Doctor.findOne({email:req.body.email});

      if(!doctor || doctor.password!=req.body.password){
          return res.json(422,{
              message:"Invalid username and password"
          });
      }
      return res.json(200,{
          message:"Sign in,successfull, here is your token and keep it safe!",
          data:{
              token:jwt.sign(doctor.toJSON(),jwt_secret,{expiresIn:'100000'})
          }
      })
    }catch(err){
        console.log("********",err);
        return res.json(500,{
            message:"Internal Server Error"
        });
    }
}