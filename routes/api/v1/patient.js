const express = require("express");
const router = express.Router();

const patientApi = require("../../../controllers/api/v1/patient_api");
const ReportApi = require("../../../controllers/api/v1/reports_api");
// const jwt=require('jsonwebtoken');
const passport = require("passport");

//wait verify ka code bhul gya..dekhke likha hu okay//are you there
router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  patientApi.createReport
);

router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patientApi.registerPatient
);

router.get("/:id/all_reports", patientApi.AllReport);

router.get("/:status", ReportApi.statusReport);

module.exports = router;
//which data do u want to polate ?
//bro wo gaya solve mujhe postman me report show krena hai or data

//bro yehi problem  aa rahi hai...aap route  route to sahi hai..maine hata diya na
