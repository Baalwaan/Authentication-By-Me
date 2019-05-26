const bcrypt = require('bcryptjs');

module.exports = (password) => {
  bcrypt.genSalt(10)
    .then(salt => bcrypt.hash(password, salt))
    .then((hashedPass) => {
      console.log(hashedPass);
      return hashedPass;
    })
    .catch(err => console.log('Error :', err));
};
