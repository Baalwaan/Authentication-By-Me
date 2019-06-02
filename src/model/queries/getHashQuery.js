const db = require('../database/db_connection');

const getHashQuery = email => new Promise((resolve, reject) => db
  .query('SELECT hashed_password FROM accounts where email=$1', [email])
  .then((response) => {
    if (response.rows.length === 0) {
      reject('Account or password is incorrect');
    }
    resolve(response.rows[0]);
  })
  .catch(err => console.log('Error: ', err)));

module.exports = getHashQuery;
