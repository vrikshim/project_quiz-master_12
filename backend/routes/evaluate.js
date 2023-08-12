const express=require('express')
const evaluation_controller=require("../evaluation_controller")
const router=express.Router();
router.route("/").post(evaluation_controller);
module.exports=router


