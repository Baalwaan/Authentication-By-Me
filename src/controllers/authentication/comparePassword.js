const bcrypt = require("bcryptjs");

const comparePassword = (password, hashed_password) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashed_password).then(response => {
      if (response) {
        resolve(true);
      } else {
        console.log("wrongpassword do not match");
        reject("Account or password is incorrect.");
      }
    });
  });
};

module.exports = comparePassword;
