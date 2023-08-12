const mongoose=require('mongoose');
// const Question_database=()=>{
//     mongoose.createConnection(process.env.MONGO_QUESTION)
//     .then((con)=>{
//         console.log(`database connected here ${con.connection.host}`)
//     })
//     .catch((err)=>console.log(err));
// }
const connectDatabase=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((con)=>{
        console.log(`database connected here ${con.connection.host}`)
    })
    .catch((err)=>console.log(err));
}
module.exports={
    // Question_database,
    connectDatabase
}
// exports.connectDatabase=()=>{
//     mongoose.connect(process.env.MONGO_URI)
//     .then((con)=>console.log(`Database Connected: ${con.connection.host}`))
//     .catch((err)=>console.log(err));
// }

