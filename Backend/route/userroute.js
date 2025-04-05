const express = require("express");
const {signup, login} = require("../controller/usercontroller");
const route = express.Router();


route.post("/signup" , signup)
route.post("/login" , login)

module.exports = route;