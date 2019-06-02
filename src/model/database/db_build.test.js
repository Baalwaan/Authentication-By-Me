const { readFileSync } = require('fs');
const path = require('path');

const db = require('./db_connection');

const dbBuild = () => {
  return new Promise((resolve, reject) => {
    sqlBuildScript = readFileSync(
      path.join(__dirname, 'db_build.sql')
    ).toString();
    return db
      .query(sqlBuildScript)
      .then(response => {
        resolve('Database built successfully');
      })
      .catch(err => {
        reject('Database build failed. See error: ', err);
      });
  });
};

module.exports = dbBuild;
