// import { Stack } from "@mui/material";
// import "./App.css";
// import Register from "./Components/Register";

// function App() {
//   return <Stack alignItems={"center"} justifyContent={"center"} height={"100vh"}>
//     <Register>

//     </Register>
//   </Stack>;
// }


// export default App;


// new code alltogether
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from "./Components/Register";
import Login from "./Components/Login";
import Homepage from "./Components/homepage";
import Question from './Components/Question';
import Evaluatepage from './Components/evaluate';
function App(){
  return (
    <Routes>
      <Route path='/' element={<Register></Register>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/home' element={<Homepage></Homepage>}/>
      <Route path='/question' element={<Question></Question>}/>
      <Route path='/evaluate' element={<Evaluatepage></Evaluatepage>}/>

    </Routes>
  )
}
export default App;

