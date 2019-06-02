const db = require('../database/db_connection');

// this one will be used for signing up resolves false so we can create user
const checkUser = email => {
  new Promise((resolve, reject) => {
    db.query('SELECT * FROM accounts where email=$1', [email])
      .then(response => {
        if (response.rows.length === 0) {
          resolve(false);
        } else {
          reject('Account already exists');
        }
      })
      .catch(err => {
        console.log('Error: ', err);
        reject(err);
      });
  });
};

// this is for logging in
const checkUserLogin = email => {
  return new Promise((resolve, reject) => {
    return db
      .query('SELECT * FROM accounts where email=$1', [email])
      .then(response => {
        if (response.rows.length === 0) {
          reject('Account or password is incorrect.');
        } else {
          resolve(true);
        }
      })
      .catch(err => {
        console.log('Error: ', err);
        reject(err);
      });
  });
};

// process.on('unhandledRejection', error => {
//   // Will print "unhandledRejection err is not defined"
//   console.log('unhandledRejection', error);
// });

module.exports = { checkUser, checkUserLogin };
