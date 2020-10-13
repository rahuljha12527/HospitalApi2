const Doctor=require('../../../models/doctor');
const Patient=require('../../../models/patient');
const Report=require('../../../models/reports');


module.exports.statusReport=async function(req,res){
    const report=await Report.find({staus:req.params.status})
         .sort('-createdAt')
         .populate({
             path:'doctor',
            })
          .populate({
              path:'patient'
          });
          
          if(report.length==0){
              return res.json(200,{
                  message:"no reports found successfully for the status" +req.params.status
              })
          }

          return res.json(200,{
              data:{
                  reports:report,
                  status:req.params.status
              }
          })
}