const { response } = require("express");
const express = require("express");
const router = express.Router(); //have router out of express
const signUpTemplateCopy = require("../models/signupmodel");
//const bcrypt = require("bcrypt");

router.post("/signup", (request, response) => {
  // const saltPassword = await bcrypt.genSalt(10)
  // //saltPassword has been hashed
  // const securePassword = await bcrypt.hash(request.body.password, saltPassword)

  const signedUpUser = new signUpTemplateCopy({
    fullName: request.body.fullName,
    userName: request.body.userName,
    email: request.body.email,
    password: request.body.password,
    //password: securePassword,
  });
  //need to save it
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;

//create a schema
