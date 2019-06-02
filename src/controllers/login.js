const formValidator = require("./formvalidation/formValidator");
const checkuserExist = require("../model/queries/checkUserExistQry");
const bcrypt = require("bcryptjs");
const hashQuery = require("../model/queries/hashQuery");
const comparePassword = require("./authentication/comparePassword");

const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const form = req.body;
  const { email, password } = req.body;
  checkuserExist(email)
    .then(response => {
      if (response == true) {
        formValidator(form);
      } else {
        // console.log('1st then in controller')
        res.render("home", { message: "Account already exists" });
        throw new Error("Account already exists");
      }
    })
    .then(response =>
      /*in this then statement query database to get hashed password of that existing username
            then do a bcryptcompare*/
      hashQuery(email)
    )
    .then(response => comparePassword(password, response.hashed_password))
    .then(response => {
      if (response) {
        console.log("JWT signing here");
        const token = jwt.sign(
          { loggedin: true, user_email: email },
          process.env.SECRET
        );
        console.log(token);

        res.cookie("RememberMe", token, {
          maxAge: 900000,
          httpOnly: false,
          loggedin: true
        });

        res.render("profile", { email: email });
      } else {
        console.log("Redirect to home happening here");
        res.redirect(302, "loginPage");
        res.end("user login failed");
      }
    })
    // .then(res.render("profile"))
    .catch(err => {
      console.log(err);
      res.render("login", { message: "Your account or password is incorrect" });
    });
};

module.exports = login;
