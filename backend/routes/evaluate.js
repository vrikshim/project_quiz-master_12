const express=require('express')
const evaluation_controller=require("../evaluation_controller")
const router=express.Router();
router.route("/").get(evaluation_controller);
module.exports=router


