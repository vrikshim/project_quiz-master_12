import { Stack,Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import React from "react";
// import { useState } from "react";

const QuizCard = (prop) => {
  
  const data_of_question = prop.prop_name;
  const answered_question=prop.answered_array;//function 
  const answered_array_third=prop.answered_array_second;//array
  
  // ALTERNATE WAY TO UPDATE THE ANSWERS
  const handleonselect=(event)=>{
    //  console.log(event.target.value)
     answered_question({...answered_array_third,  [data_of_question._id] : event.target.value })
     
     console.log(answered_array_third)
    //  answered_question([,event.target.value)
  }

  // const handleonselect=(event)=>{

  //   //  answered_question({...answered_array_third,  [data_of_question._id] : event.target.value }) alternate way
  //   const updated_array={ ...answered_array_third};
  //   updated_array[data_of_question._id]=event.target.value;
  //   answered_question(updated_array)
  //    console.log("hell")
  //     console.log(answered_array_third)
  //     console.log("bell")
  
  // }

  // console.log("juin")
  //   console.log(data_of_question)
  //   console.log(data_of_question.questionText);
  //   console.log(data_of_question.options[0].optionText);
  //   console.log(data_of_question.options[1].optionText);
  //   console.log(data_of_question.options[2]);
  //   console.log(data_of_question.options[3]);
  return (
    <Stack
      gap={2}
      sx={{
        width: "40vw",
        height: "23vh",
        // alignItems: "center",
        boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Typography variant="h4">Q.. {data_of_question.questionText} </Typography>
      <Stack
        sx={{ width: "80%", marginLeft: "44px" }}
        justifyContent={"space-between"}
      >
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            //   value={value}
            //   onChange={handleChange}
          >
            <Stack
              direction={"row"}
              sx={{ width: "100%" }}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={<Radio />}
                value={data_of_question.options[0].optionText}
                label={data_of_question.options[0].optionText}
                onChange={handleonselect}
                />
              <FormControlLabel
                control={<Radio />}
                value={data_of_question.options[1].optionText}
                label={data_of_question.options[1].optionText}
                onChange={handleonselect}
                />
            </Stack>
            <Stack
              direction={"row"}
              sx={{ width: "100%" }}
              justifyContent={"space-between"}
            >
              <FormControlLabel
                control={<Radio />}
                value={data_of_question.options[2].optionText}
                label={data_of_question.options[2].optionText}
                onChange={handleonselect}
              />
              <FormControlLabel
                control={<Radio />}
                value={data_of_question.options[3].optionText}
                label={data_of_question.options[3].optionText}
                onChange={handleonselect}
              />
            </Stack>
          </RadioGroup>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default QuizCard;
