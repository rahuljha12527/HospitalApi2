const Patient = require('../../../models/patient');
const Doctor=require('../../../models/doctor');

module.exports.registerPatient=function(req,res){
    try{
        if(!req.body.name || req.body.phone){
            return res.json(400,{
                message:"Fill All the details"
            })
        }

        let patient=await Patient.findOne({phone:req.body.phone})

        const doctor=await Doctor.findById({_id:req.user.id});

        console.log("doctor is",doctor);

        const newPatient=Patient.create({
            name:req.body.name,
            phone:req.body.phone,
            doctor:doctor._id
        });

        return res.json(200,{
            message:"You registered patient successfully",
            patient:newPatient
        })
             
    }catch(err){
        return res.json(500,{
            message:"Internal Server Error"
        });
    }

}