
const express=require('express');
const router=express.Router();

const patientApi=require('../../../controllers/api/v1/patient_api');
const ReportApi=require('../../../controllers/api/v1/reports_api');
router.post(':id/create_report',patientApi.createReport);

router.post('/register',patientApi.registerPatient)


router.get(':id/all_reports',patientApi.AllReport);



router.get('/:status',ReportApi.statusReport);

module.exports=router;