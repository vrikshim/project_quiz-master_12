const Question_information=require("./models/question_set")

const get_set=async(req,res)=>{
    try{
          const q_set=await Question_information.find();
        //   console.log(q_set);
          res.status(200).json(q_set)
    }catch(error){
     res.status(500).json({
        success:false,
        message:error+"goyal"
     })
    }
}
//500 for internal server problem
module.exports=get_set;