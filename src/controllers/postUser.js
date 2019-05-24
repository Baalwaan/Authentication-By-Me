const formValidator = require('./formvalidation/formValidator');
const postUser = (req, res) => {
    formValidator(req.body)
        .then(response => console.log(response))
        .catch(err => console.log('Error: ', err));


    res.end()
    // res.render('postUser');
};

module.exports = postUser;