const formValidator = require('./formvalidation/formValidator');
const checkuserExist = require('../model/queries/checkUserExistQry');
const postUserQry = require('../model/queries/postUserQry');

const postUser = (req, res) => {
    const { first_name, second_name, email, password, confirmed_password } = req.body;
    formValidator(req.body)
        .then(response => console.log(response))
        .then(response => checkuserExist(email))
        .then(response => {
            return response ? response : res.render('signUpWrong', { message: 'Account already exists' });
        })
        .then(response => {
            if (response) {
                postUserQry(first_name, second_name, email, password)
            }
        })
        .catch(err => console.log('Error: ', err));
};

module.exports = postUser;