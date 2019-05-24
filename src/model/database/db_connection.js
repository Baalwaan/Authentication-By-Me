const { Pool } = require('pg');

require('env2')('./config.env');

let connectionString = process.env.DATABASE_URL;

if (process.env.NODE_ENV === 'test') {
    connectionString = process.env.TEST_DATABASE_URL;
};

if (!connectionString) {
    throw new Error('No DATABASE_URL. Please set DATABASE_URL')
};

module.exports = new Pool({
    connectionString,
    max: 2,
    ssl: true
});
