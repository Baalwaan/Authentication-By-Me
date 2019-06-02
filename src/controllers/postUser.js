const bcrypt = require("bcryptjs");

const formValidator = require("./formvalidation/formValidator");
const checkuserExist = require("../model/queries/checkUserExistQry");
const postUserQry = require("../model/queries/postUserQry");

const postUser = (req, res) => {
  const form = req.body;
  const { email, password } = req.body;

  checkuserExist(email)
    .then(response => {
      if (response !== true) {
        formValidator(req.body);
      } else {
        // console.log('1st then in controller')
        res.render("signUp", { message: "Account already exists" });
        throw new Error("Account already exists");
      }
    })
    .then(response => {
      // console.log('this is password ', password)
      salt = bcrypt.genSaltSync(10);
      hashedPassed = bcrypt.hashSync(password, salt);
      postUserQry(form, hashedPassed);
    })
    .then(
      res.render("login", {
        successfull_message: "Account created Successfully"
      })
    )
    .catch(err => console.log(err));
};

module.exports = postUser;
