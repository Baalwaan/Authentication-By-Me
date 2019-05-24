const db = require('../database/db_connection');

const postUser = (first_name, second_name, email, password) => {
    return db
        .query('INSERT INTO accounts where email')

}