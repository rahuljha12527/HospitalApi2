const Doctor = require("../../../models/doctor");
const Patient = require("../../../models/patient");
const jwt = require("jsonwebtoken");

module.exports.register = async function (req, res) {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.json(200, { message: "Please fill all the required field" });
  }
  try {
    await Doctor.findOne(
      {
        email: req.body.email,
      },
      function (err, user) {
        if (err) {
          return res.json(400, {
            message: "Username already exist",
          });
        }

        if (!user) {
          Doctor.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          });
          return res.json(200, {
            message: "registered successfully",
          });
        } else {
          return res.json(400, {
            message: "Username already exist",
          });
        }
      }
    );
  } catch (err) {
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

module.exports.login = async function (req, res) {
  try {
    let doctor = await Doctor.findOne({ email: req.body.email });

    if (!doctor || doctor.password != req.body.password) {
      return res.json(422, {
        message: "Invalid username and password",
      });
    }
    return res.json(200, {
      message: "Sign in,successfull, here is your token and keep it safe!",
      data: {
        token: jwt.sign(doctor.toJSON(), "hospitalApi", {
          expiresIn: "1000000000",
        }),
        doctor,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
//aapki query me samjh nh  pa rha hu.
//bro mujhe data jo hai wo mujhe postaman me dekhne hai jaise paitient ke data jaise _id username email bs yehi
//yhi ?
//ha bro but kaise kiya..aapne bs data me token send kiya tha user ko nh.. acha bro
//wait ek baar register patient krne...sure okay ...aap kijiye..mujhe routes ba me krte hu tum dekhne jra okay
//fir se login  lrt wu wait..mujhe token chhahiye tha acha sorry
//wait//prk krte hu login wait
//bro wait thode se bs
