const bcrypt = require("bcryptjs");

const comparePassword = (password, hashed_password) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(password, hashed_password).then(response => {
      if (response) {
        resolve(true);
      } else {
        console.log("Account or password is incorrect.");
        reject("Account or password is incorrect.");
      }
    });
  });

module.exports = comparePassword;
