import {  Stack,Button } from '@mui/material'
import QuizCard from './QuizCard'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Question = () => {
   const [recieved_data,set_recieved_data]=useState([]);
   const navigate = useNavigate();

  //  const [answered_data,set_answered_data]=useState({});
     const [answered_data,set_answered_data]=useState({});
    const fun=async ()=>{
      try{
        const data=await fetch("http://localhost:4000/question")
        const datajson=await data.json();
        if(data.ok)
        {
          
            set_recieved_data(datajson);
            console.log("this was done successfully")
          //  console.log(datajson)
         
        }
        else{
          // 
          console.log(" hello the error is here ")
        }
      }
      catch(error){
        console.log(error+" error has occured here ")
      }
   }
   const to_submit_the_data=async ()=>{
    // console.log("this si o")
    // console.log(answered_data)
    // navigate("/evaluate");'
    console.log("here i am making sure about things")
    console.log(answered_data)
    // const data_to_send={

    // }
      const optio={
        method:'POST',
        headers:{
          'Content-Type':'application/json,'
        },
        body:JSON.stringify(answered_data),
      }
      try
      {
        console.log(optio)
        const evaluation_data=await fetch("http://localhost:4000/evaluate",optio);
        console.log(optio)
        console.log("make")
        console.log(evaluation_data)
        console.log('believe')

      // .then((response)=>{
      //   console.log("evaluation success console")
      //   // response.json()
      //   return response.json();
      // })
      // .then((data)=>{
      //    console.log("this is the spot where this is happening")
      //   console.log(data);
      //   navigate("/evaluate");
      // })
      // .catch((error)=>{
      //   console.log(error+"here is occuring the problem")
      // })
      if(evaluation_data.ok)
      {
        const evaluation_data_json=await evaluation_data.json()
        console.log("ball")
        console.log(evaluation_data)
        console.log(evaluation_data_json)
        console.log("tall")
        console.log(evaluation_data_json);
        navigate("/evaluate");
      }
      else{
         console.log("server response was not okay")
      }
    }
    catch(error){
      console.log("an error occured for evaluation"+error)

    }
   }
   useEffect(()=>{
    fun();
   },[])

  // const togetdata=fetch("",options);
  // sabse pehli cheej toh yeh hai ki mughe is page pe paate hi quiz ke question dikhane hai 
  // vo usestate se hoga i think 
  return (

    <Stack gap={2}>
      { recieved_data.map((element)=>{
       return <QuizCard prop_name={element} answered_array={set_answered_data} answered_array_second={answered_data}> </QuizCard>
      })}
{/*      
     <QuizCard prop_name={recieved_data[0]}/> */}
    <Button variant="contained" onClick={to_submit_the_data}>Submit Responses</Button>
    </Stack>
  )
}

export default Question
