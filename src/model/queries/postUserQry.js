const db = require('../database/db_connection');

const postUser = (form, hashed) => db
  .query('INSERT INTO accounts (first_name, second_name, email, hashed_password) VALUES ($1, $2, $3, $4)', [form.first_name, form.second_name, form.email, hashed])
  .then((response) => {
    if (response.rows.length === 1) {
      console.log('Query: Account posted into database');
      return true;
    }
    return false;
  })
  .catch(err => console.log('Error: ', err));

module.exports = postUser;
