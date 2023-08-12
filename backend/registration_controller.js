const User_information=require("./models/register_page")
const create_registration=async(req,res)=>{
    try{
              const {name,email,password}=req.body;
      console.log(name+"_"+email+"_"+password);
      if(!name ||!email || !password)
      {
          res.status(400).json({
              success:false,
              message:error+"fields not entered"
            });
            throw new error(" data fields not entered ");
      }
      else{
        const new_user_register={
            name:name,
            email:email,
            password:password
        }
      
    //   const individual=await User_information.create(new_user_register);
    const data=new User_information(new_user_register);
    await User_information.insertMany([data]);
    res.status(200).json({
        success:true,
        message:"registration is done successfully"
      });
     
    }
}
    catch(error){
            res.status(456).json({
        success:false,
        message:error+"for registration hello"
    });
    }
}
   
//     // res.status(300).json({
//     //     success:false,
//     //     message:"this is nothing "
//     // })
//       const {name,email,password}=req.body;
//       console.log(name+"_"+email+"_"+password);
//     //   if(!name ||!email_id || !password)
//     //   {
//     //       res.status(400).json({
//     //           success:false,
//     //           message:error+"fields not entered"
//     //         });
//     //         throw new error(" data fields not entered ");
//     //   }
//     //   else{
//     //     const new_user_register={
//     //         name:name,
//     //         email:email_id,
//     //         password:password
//     //     }
      
//     // //   const individual=await User_information.create(new_user_register);
//     // const data=new User_information(new_user_register);
//     // await User_information.insertMany([data]);
//       }
    
// //    catch(error)
// //    {
// //     res.status(456).json({
// //         success:false,
// //         message:error+"for registration hello"
// //     });
// //    }
// // }
module.exports=create_registration;