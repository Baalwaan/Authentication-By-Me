<<<<<<< HEAD

const nameRegex = /^(?=.{1,20}$)[a-zA-Z]+(?:['_.\s][a-z]+)*$/;
const emailRegex = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}/i;
const passwordRegex = /(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

passwordChecker = (form) => {
    const formArr = [form.first_name.value, form.second_name.value, form.email.value, form.password.value, form.confirmed_password.value];

    const messagesArr = ['Please ensure first name is in correct format.', 'Please ensure last name is in correct format', 'Please ensure email is in correct format.', 'Passwords must contain at least 8-20 characters, including uppercase, lowercase letters, numbers and special characters.', 'Passwords must contain at least 8-20 characters, including uppercase, lowercase letters, numbers and special characters.'];

    const regexArr = [nameRegex, nameRegex, emailRegex, passwordRegex, passwordRegex];

    for (let i = 0; i < regex.regexArr; i++) {
=======
passwordChecker = (form) => {

    // regex Patterns 
    const nameRegex = /^(?=.{1,20}$)[a-zA-Z]+(?:['_.\s][a-z]+)*$/;
    const emailRegex = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}/i;
    const passwordRegex = /(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

    // form inputs array
    const formArr = [form.first_name.value, form.second_name.value, form.email.value, form.password.value, form.confirmed_password.value];

    // array of messages
    const messagesArr = ['Please ensure first name is in correct format.', 'Please ensure last name is in correct format', 'Please ensure email is in correct format.', 'Passwords must contain at least 8-20 characters, including uppercase, lowercase letters, numbers and special characters.', 'Passwords must contain at least 8-20 characters, including uppercase, lowercase letters, numbers and special characters.'];


    // regex patterns stored in array
    const regexArr = [nameRegex, nameRegex, emailRegex, passwordRegex, passwordRegex];

    // will check regex  against form inputs and display message from messageArr if there is error
    for (let i = 0; i < regexArr.length; i++) {
>>>>>>> feature/handlebars-pages
        if (!regexArr[i].test(formArr[i])) {
            alert(messagesArr[i]);
            return false
        }
<<<<<<< HEAD
    };
=======
    }
>>>>>>> feature/handlebars-pages

    if (form.password.value !== form.confirmed_password.value) {
        alert('Passwords do not match');
        return false;
    }
    return true;
<<<<<<< HEAD
}







=======
};
>>>>>>> feature/handlebars-pages
