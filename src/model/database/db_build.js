const { readFileSync } = require('fs');
const path = require('path');

const db = require('./db_connection');

const dbBuild = () => {
  sqlBuildScript = readFileSync(
    path.join(__dirname, 'db_build.sql')
  ).toString();
  db.query(sqlBuildScript)
    .then(response => console.log('Database built successfully'))
    .catch(err => console.log('Database build failed. See error: ', err));
};

dbBuild();
