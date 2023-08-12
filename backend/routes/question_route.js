const express=require("express");
const question_controller=require("../question_controller")
const router=express.Router()
router.route("/").get(question_controller);
module.exports=router;