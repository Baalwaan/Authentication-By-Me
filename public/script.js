const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmed_password');
const signupButton = document.getElementById('signup-button');

passwordChecker = (form) => {
    if (form.password.value !== form.confirmed_password.value) {
        alert('Passwords do not match');
        return false;
    }
    return true;
}


