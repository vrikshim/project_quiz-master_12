const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config({ path: "backend/config/config.env" });
app.use(cors());
<<<<<<< HEAD
app.use(express.json({ limit: "1000mb" }));
app.use(express.urlencoded({ limit: "1000mb", extended: true }));
=======
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
>>>>>>> 8e61ba3777377d4f246794f23fafd2d130cf7e11
//  app.use(cookieParser());

const tanishk = require("./routes/registration");
const goyal = require("./routes/login"); //NEW
const akshat = require("./routes/question_route");
const sharma = require("./routes/evaluate");
app.use("/register", tanishk);
app.use("/login", goyal); //NEW
app.use("/question", akshat);
app.use("/evaluate", sharma);

module.exports = app;
