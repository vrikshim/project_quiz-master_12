// commented
import axios from "axios";

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
    const data = answered_data;

    axios
      .post("http://localhost:4000/evaluate", data)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        // console.log(object)
        console.log("Error:", error);
      });
    // try {
    //   const response_axios = await axios.post(
    //     "http://localhost:4000/evaluate",
    //     data
    //   );
    //   if (response_axios.ok) {
    //     console.log(response_axios.data.message);
    //   } else {
    //     console.log("Error from server");
    //   }
    // } catch (error) {
    //   console.log("Can't make the connection" + error);
    // }

    // fetch("http://localhost:4000/evaluate", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json,",
    //   },
    //   body: JSON.stringify(data),
    // }).then((resp) => {
    //   resp.json();
    // }).then((result)=>{
    //   console.log(result);
    // });
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