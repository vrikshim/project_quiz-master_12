const fun = async (req, res) => {
  try {
    console.log("in the evaluate function");
    console.log(req.body);
    //  console.log("mello")
    const response = {
      success: true,
      message: "Evaluation successful",
      data: req.body, // You can add additional information here
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error + "here is the error for this line",
    });
  }
};
module.exports = fun;
