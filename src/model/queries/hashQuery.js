const db = require('../database/db_connection');

const hashQuery = email => db
    .query('SELECT hashed_password FROM accounts where email=$1', [email])
    .then((response) => {
        if (response.rows.length === 0) {
            return false;
        }
        return response.rows[0];
    }).catch(err => console.log('Error: ', err));

module.exports = hashQuery;
