const { checkUser } = require("../model/queries/checkUserExistQry");
const formValidator = require("./formvalidation/formValidator");
const postUserQry = require("../model/queries/postUserQry");
hashedPassed = require("./authentication/hashPassword");

const postUser = (req, res) => {
  const form = req.body;
  const { email, password } = req.body;

  checkUser(email)
    .then(() => formValidator(req.body))
    .then(() => hashedPassed(password))
    .then(hashedPassed => postUserQry(form, hashedPassed))
    .then(() =>
      res.render("login", {
        successfull_message: "Account created Successfully"
      })
    )
    .catch(err => {
      console.log(err);
      res.render("signUp", { message: err });
    });
};

module.exports = postUser;
