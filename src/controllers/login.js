const formValidator = require('./formvalidation/formValidator');
const checkuserExist = require('../model/queries/checkUserExistQry');
const bcrypt = require('bcryptjs')
const hashQuery = require('../model/queries/hashQuery');

const login = (req, res) => {
    const form = req.body;
    const { email, password } = req.body;
    checkuserExist(email)
        .then((response) => {
            if (response == true) {
                formValidator(form);
            } else {
                // console.log('1st then in controller')
                res.render('home', { message: 'Account already exists' });
                throw new Error('Account already exists');
            }
        }).then(response =>
            /*in this then statement query database to get hashed password of that existing username
            then do a bcryptcompare*/
            hashQuery(email))
        .then(response => {
            bcrypt.compare(password, response.hashed_password)
                .then(response => {
                    if (response) {
                        console.log('it worked: ', response)
                        return true;
                    } else {
                        res.render('login', { message: 'Wrong Password' });
                        throw new Error('Wrong password');

                    }
                }).catch(err => console.log('error: ', err))
            console.log('this is query', response)//this returns hashed password from db
        }).then(res.redirect(302, '/profile'))








        /*compare hash with password here */
        .catch(err => console.log(err));

}


module.exports = login