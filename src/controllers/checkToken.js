const checkToken = (req, res) => {
  //   console.log("this is req", req.headers);
  //   res.end("hellow");

  const header = req.headers["authorization"];
  console.log(req.headers);

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];

    req.token = token;
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
};

module.exports = checkToken;
