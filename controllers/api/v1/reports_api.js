const Doctor=require('../../../models/doctor');
const Patient=require('../../../models/patient');
const Report=require('../../../models/reports');

//done ha bro thank you tumhere job achi lagegi..thank u.aapki v lageg dekhte hai yr acha chlo bye thank you.
module.exports.statusReport=async function(req,res){
    const report=await Report.find({status:req.params.status})
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
//apko jhn dikkat aa rhi hai wo dikhaiye
//acha dikhate hu
//bro negative per report to hai...
//bro tum bahut jante ho tumne node js per intership ki hai kiya...nh me v carrer camp ka hi hu../s/ir 
//kon se batch me ho ....feb acha hai yr tum bahut sahi jante ho...bhut kuchh hai...achhha me dekha hu

