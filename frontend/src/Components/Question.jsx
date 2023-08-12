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
      {recieved_data.map((element) => {
        return (
          <QuizCard
            prop_name={element}
            answered_array={set_answered_data}
            answered_array_second={answered_data}
          ></QuizCard>
        );
      })}
      <Button variant="contained" onClick={to_submit_the_data}>
        Submit Responses
      </Button>
    </Stack>
  );
};

export default Question;