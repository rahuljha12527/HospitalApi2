
const express=require('express');
const router=express.Router();

const patientApi=require('../../../controllers/api/v1/patient_api');
router.post(':id/create_report',patientApi.createReport);

router.post('/register',patientApi.registerPatient)


router.post(':id/all_reports',patientApi.AllReport);



module.exports=router;