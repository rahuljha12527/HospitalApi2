const Patient = require('../../../models/patient');
const Doctor=require('../../../models/doctor');
const Report=require('../../../models/reports');

module.exports.createReport=async function(req,res){
    try{
       if(!Report.schema.path('status').enumValues.includes(req.body.status)){
           console.log("enum Values are-->",Report.schema.path('status').enumValues);
           return res.json(400,{
               message:"check enum values"
           });
       }

       let patient=await Patient.findOne({_id:req.params.id});

       if(!patient){
           return res.json(400,{
               message:"no patient find with this id"
           });
       }

       let doctor=await  Doctor.findOne({_id:req.user});

       const newReport=await Report.create({
           doctor:doctor,
           patient:patient,
           status:req.body.status           
       });

       patient.reports.save(newReport);
       patient.save();

       return res.json(200,{
           message:"congrats!! you have created the project",
           reports:"newReport"
       });
    }catch(err){
        return res.json('500',{
            message:"error in creating a report"
        });
    }
}

module.exports.AllReport=async function(req,res){
    try{
      let patient=await Patient.findById({_id:req.params.id})
                   .sort('-createdAt')
                   .populate({
                       path:"reports",
                       populate:{
                           path:"doctor"

                       },
                       populate:{
                           path:"patient",
                       }
                   });

                   if(!patient){
                       return res.json(422,{
                           message:"check your id"
                       });
                   }

                   return res.json(200,{
                       data:{
                         patient_reports:patient.reports
                       }
                   });

    }catch(err){
        return res.json(500,{
            message:"Internal Server error"
        })
    }
}

module.exports.registerPatient=async function(req,res){
    try{
        if(!req.body.name || !req.body.phone){
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