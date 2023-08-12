const User_information = require("./models/register_page");

const check_info = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(300).json({
        sucess: false,
        message: "either name or email or password field is empty",
      });
    } else {
      const existingUser = await User_information.findOne({
        name,
        email,
        password,
      });
    //   heelloo

      if (existingUser) {
        res.status(200).json({
          success: true,
          message:
            "User already exists with this name, email, and password so now we have to direct them to the main page",
        });
      } else {
        res.status(243).json({
          // ok message will be true for codes that belong to the range [200,299]
          success: false,
          message:
            "User does not exist, so now we have to direct them to the login page again",
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: error,
    });
  }
};
module.exports = check_info;
