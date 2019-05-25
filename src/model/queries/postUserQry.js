const db = require('../database/db_connection');

const postUser = (first_name, second_name, email, password) => {
    return db
        .query('INSERT INTO accounts (first_name, second_date, email, hashed_password) VALUES ($1, $2, $3, $4)', [first_name, second_name, email, password])
        .then(response => {
            if (response.rows.length === 1) {
                console.log('Query: Account posted into database');
                return true
            } else {
                return false;
            }
        })
        .catch(err => console.log('Error: ', err));

}

module.exports = postUser;