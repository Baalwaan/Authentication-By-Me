const checkToken = (req, res) => {
  console.log("this is req", req);
  res.end("hellow");
};

module.exports = checkToken;
