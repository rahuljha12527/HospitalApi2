const express=require('express');
const router=express.Router();



const doctorApi=require('../../../controllers/api/v1/doctor_api');
router.post('/login',doctorApi.login);

router.post('/register',doctorApi.register);
//login kijiye krte hu bro wo register
module.exports=router;
