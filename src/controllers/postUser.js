const formValidator = require('./formvalidation/formValidator');
const checkuserExist = require('../model/queries/checkUserExistQry');

const postUser = (req, res) => {
    const { first_name, second_name, email, password, confirmed_password } = req.body;
    formValidator(req.body)
        .then(response => console.log(response))
        .then(response => checkuserExist(email))
        .then(response => {
            if (response) {
                return response;
            } else {
                console.log('Account already exists');
                res.render('signup', { message: 'Account already exists' })
                // res.redirect('/signup', { message: 'Account already exists' })
            };
        })
        .catch(err => console.log('Error: ', err));


    // res.end()
    // res.render('postUser');
};

module.exports = postUser;