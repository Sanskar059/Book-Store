const express = require("express");
const  getbook  = require("../controller/bookcontroller");



const router = express.Router();

router.get("/"  , getbook);
module.exports =  router