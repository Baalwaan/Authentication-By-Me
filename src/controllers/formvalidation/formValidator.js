const formValidator = (form) => {
    return new Promise((resolve, reject) => {
        // regex Patterns
        const nameRegex = /^(?=.{1,20}$)[a-zA-Z]+(?:['_.\s][a-z]+)*$/;
        const emailRegex = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}/i;
        const passwordRegex = /(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

        // form inputs array
        const formArr = [
            form.first_name,
            form.second_name,
            form.email,
            form.password,
            form.confirmed_password,
        ];

        // array of messages
        const messagesArr = ['Please ensure first name is in correct format.',
            'Please ensure last name is in correct format',
            'Please ensure email is in correct format.',
            'Passwords must contain at least 8-20 characters, including uppercase, lowercase letters, numbers and special characters.',
            'Passwords must contain at least 8-20 characters, including uppercase, lowercase letters, numbers and special characters.',
        ];

        // regex patterns stored in array
        const regexArr = [nameRegex, nameRegex, emailRegex, passwordRegex, passwordRegex];

        for (let i = 0; i < regexArr.length; i++) {
            if (!regexArr[i].test(formArr[i])) {
                reject(messagesArr[i]);
            }
        }

        if (form.password !== form.confirmed_password) {
            alert('Passwords do not match');
            reject(false);
        }
        console.log('Form validated in backend successfully')
        // resolve('Form validated in backend successfully');
        return form.password;

    }

    )
}

module.exports = formValidator;