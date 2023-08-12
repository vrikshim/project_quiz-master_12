const express=require('express');
const registration_controller=require("../registration_controller");
const router=express.Router();

router.route("/").post(registration_controller);
module.exports=router;
