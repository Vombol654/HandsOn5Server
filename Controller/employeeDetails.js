const { default: Axios } = require("axios");
const mongoose = require("mongoose");
exports.getEmpDeatails = async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = 5;
  // const skip = (page - 1) * limit;
  let startIndex = page * limit - limit;
  let endIndex = page * limit;
  // const filteredResponse = response.slice(startIndex, endIndex)
  await Axios.get("http://dummy.restapiexample.com/api/v1/employees")
    .then((r) => {
      // console.log(skip);
      // console.log(typeof Object.values(r.data["data"]));
      let x = r.data["data"];
      const filteredResponse = x.slice(startIndex, endIndex);
      // x = x.skip(skip).limit(limit);
      console.log(filteredResponse);
      res.status(200).json({ data: filteredResponse });
    })
    .catch((err) => {
      console.log(err);
      res.status(429).json({ message: "Too Many Attempts." });
    });
};
