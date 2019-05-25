const db = require('../database/db_connection');

const checkUser = (email) => {
    return db
        .query('SELECT * FROM accounts where email=$1', [email])
        .then(response => {
            if (response.rows.length === 0) {
                return true;
            } else {
                return false;
            }
        }).catch(err => console.log('Error: ', err));
}

module.exports = checkUser;
