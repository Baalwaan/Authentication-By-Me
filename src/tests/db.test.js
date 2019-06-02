const tape = require('tape');
const runDbBuild = require('../model/database/db_build.test');
const {
  checkUser,
  checkUserLogin
} = require('../model/queries/checkUserExistQry');
const getHashQuery = require('../model/queries/getHashQuery');
const postUser = require('../model/queries/postUserQry');

const testData = {
  validEmail: 'burhan_1990@hotmail.co.uk',
  invalidEmail: 'baalwaan@hotmail.com',
  form: {
    first_name: 'Anthony',
    second_name: 'Joshua',
    email: 'aj@champion.com',
    hashed_password: 'London2018'
  }
};

// form, hashed;

tape('tape is working', t => {
  t.equals(1, 1, 'one equals one');
  t.end();
});

tape('testing if checkUserLogin query returns something', t => {
  runDbBuild()
    .then(() => checkUserLogin(testData.validEmail))
    .then(response => {
      t.equal(response, true, 'returns true because email exists');
      t.end();
    });
});

//with an invalid email there is an unhandled promise error

// tape('testing if checkUserLogin query returns something', t => {
//   runDbBuild()
//     .then(() => checkUserLogin(testData.invalidEmail))
//     .then(response => {
//       t.equal(
//         response,
//         'Account or password is incorrect.',
//         'returns an error because email does not exist'
//       );
//       t.end();
//     });
// });

tape(
  'testing if getHashQuery returns a password from hashed_password field',
  t => {
    runDbBuild()
      .then(() => getHashQuery(testData.validEmail))
      .then(response => {
        t.equal(
          response.hashed_password,
          'London.2018',
          'Should have password'
        );
        t.end();
      });
  }
);

// tape(
//   'testing if getHashQuery returns a password from hashed_password field',
//   t => {
//     runDbBuild()
//       .then(() => getHashQuery(testData.invalidEmail))
//       .then(response => {
//         t.equal(
//           response.hashed_password,
//           'London.2018',
//           'Should have password'
//         );
//         t.end();
//       });
//   }
// );

// tape('testing postUsre', t => {
//   runDbBuild()
//     .then(() => postUser(testData.form, testData.form.hashed_password))
//     .then(response => {
//       t.equal(response, false, 'false');
//       t.end();
//     });
// });

// | id   | first_name   | second_name   | email                     | hashed_password   |
// |------+--------------+---------------+---------------------------+-------------------|
// | 1    | Burhan       | Baalwaan      | burhan_1990@hotmail.co.uk | London.2018
