const express=require('express');
const login_controller=require("../login_controller");
const router=express.Router();

router.route("/").post(login_controller);
module.exports=router;