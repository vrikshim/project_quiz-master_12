import { Stack, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //   const handleOnClick = async () => {
  //     const dataToSend = {
  //       name: firstname,
  //       email: email,
  //       password: password,
  //     };
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(dataToSend),
  //     };
  //     try {
  //       const sentData = await fetch("http://localhost:4000/register", options);
  //       if (sentData.ok) {
  //         alert("Success");
  //       } else {
  //         throw new Error("Network response was not ok");
  //       }
  //     } catch (error) {jlsdkjl
  //       throw new Error(error);
  //     }
  //   };
  //hello

  // {/* NEW*/}
  const loginOnClick = async () => {
    const dataToSend = {
      name: firstname,
      email: email,
      password: password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    };
    try {
      const response = await fetch("http://localhost:4000/login", options);
      const responseData = await response.json();

      if (response.ok) {
        if (responseData.success) {
          console.log("User login successful");
          console.log("Directing to the home page after login");
          navigate("/home");
        } else {
          console.log("User login failed");
          console.log("Directing to the original page after login failed");
          alert(responseData.message);
          navigate("/");
        }
      } else {
        console.log("Network response was not ok");
      }
    } catch (error) {
      console.log("An error occurred: that is ", error);
      throw new Error(error);
    }
  };
  // {/* NEW*/}

  return (
    <Stack
      gap={2}
      sx={{
        width: "50vw",
        height: "60vh",
        // alignItems: "center",
        boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Typography variant="h4">Login!</Typography>
      <Typography>Login to our Page</Typography>
      <TextField
        id="outlined-basic"
        label="Firstname"
        variant="outlined"
        value={firstname}
        onChange={(event) => {
          setFirstname(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      {/* <Button variant="contained" onClick={handleOnClick}>
        Submit for registration
      </Button> */}
      <Button variant="contained" onClick={loginOnClick}>
        {" "}
        {/* NEW*/}
        Submit for login{/* NEW*/}
      </Button>
      {/* NEW*/}
    </Stack>
  );
};

export default Register;
