const jwt = require("jsonwebtoken");

const { checkUserLogin } = require("../model/queries/checkUserExistQry");
const formValidator = require("./formvalidation/formValidator");
const getHashQuery = require("../model/queries/getHashQuery");
const comparePassword = require("./authentication/comparePassword");

const login = (req, res) => {
  const form = req.body;
  const { email, password } = req.body;

  checkUserLogin(email)
    .then(response => formValidator(form))
    .then(response => getHashQuery(email))
    .then(response => comparePassword(password, response.hashed_password))
    .then(response => {
      const token = jwt.sign(
        { loggedin: true, user_email: email },
        process.env.SECRET
      );

      res.cookie("RememberMe", token, {
        maxAge: 900000,
        httpOnly: false,
        loggedin: true
      });
      res.render("profile", { email: email });
    })
    .catch(err => {
      res.render("login", { message: err });
    });
};

module.exports = login;
