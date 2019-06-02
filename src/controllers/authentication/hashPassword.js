const bcrypt = require("bcryptjs");

const hashPassword = password => {
  return new Promise((resolve, reject) => {
    bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(password, salt))
      .then(hashedPass => {
        console.log("this is passhed hash", hashedPass);

        resolve(hashedPass);
        return hashedPass;
      })
      .catch(err => reject(err));
  });
};

module.exports = hashPassword;
