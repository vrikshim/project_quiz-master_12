// commented

import { Stack, Button } from "@mui/material";
import QuizCard from "./QuizCard";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const [recieved_data, set_recieved_data] = useState([]);
  const navigate = useNavigate();
  const [answered_data, set_answered_data] = useState({});
  const fun = async () => {
    try {
      const data = await fetch("http://localhost:4000/question");
      const datajson = await data.json();
      if (data.ok) {
        set_recieved_data(datajson);
        console.log("THis is recieved data");
        console.log(recieved_data);
        console.log("this was done successfully");
      } else {
        console.log(" There is an error in reciving data ");
      }
<<<<<<< HEAD
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
    const test_data={
      name:"tanisk",
      age:"34",
      height:"445"
    }
      const optio={
        method:'GET',
        headers:{
          'Content-Type':'application/json,'
        },
        body:JSON.stringify(test_data)
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
=======
    } catch (error) {
      console.log(error + " error has occured here ");
    }
  };
  const to_submit_the_data = async () => {
    console.log("Called Submit");
    console.log(answered_data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json,",
      },
      body: JSON.stringify(answered_data),
    };
    try {
      console.log(options);
      const evaluation_data = await fetch(
        "http://localhost:4000/evaluate",
        options
      );
      console.log(evaluation_data);
      if (evaluation_data.ok) {
        const evaluation_data_json = await evaluation_data.json();
>>>>>>> 8e61ba3777377d4f246794f23fafd2d130cf7e11
        console.log(evaluation_data_json);
        navigate("/evaluate");
      } else {
        console.log("server response was not okay");
      }
    } catch (error) {
      console.log("an error occured for evaluation" + error);
    }
  };
  useEffect(() => {
    fun();
  }, []);

  return (
    <Stack gap={2}>
<<<<<<< HEAD
      { recieved_data.map((element,index)=>{
       return <QuizCard key={index} prop_name={element} answered_array={set_answered_data} answered_array_second={answered_data}> </QuizCard>
=======
      {recieved_data.map((element) => {
        return (
          <QuizCard
            prop_name={element}
            answered_array={set_answered_data}
            answered_array_second={answered_data}
          ></QuizCard>
        );
>>>>>>> 8e61ba3777377d4f246794f23fafd2d130cf7e11
      })}
      <Button variant="contained" onClick={to_submit_the_data}>
        Submit Responses
      </Button>
    </Stack>
  );
};

export default Question;
