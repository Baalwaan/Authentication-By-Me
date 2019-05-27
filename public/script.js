passwordChecker = (form) => {
  // regex Patterns
  const nameRegex = /^(?=.{1,20}$)[a-zA-Z]+(?:['_.\s][a-z]+)*$/;
  const emailRegex = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}/i;
  const passwordRegex = /(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;

  // form inputs array
  const formArr = [
    form.first_name.value,
    form.second_name.value,
    form.email.value,
    form.password.value,
    form.confirmed_password.value,
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

  // will check regex  against form inputs and display message from messageArr if there is error
  for (let i = 0; i < regexArr.length; i++) {
    if (!regexArr[i].test(formArr[i])) {
      alert(messagesArr[i]);
      return false;
    }
  }
  if (form.password.value !== form.confirmed_password.value) {
    alert('Passwords do not match');
    return false;
  }
  return true;
};


loginChecker = (form) => {
  const emailRegex = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}/i;
  const passwordRegex = /(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;


  if (!emailRegex.test(form.email.value)) {
    alert('Please ensure email is in correct format.');
    return false
  }

  if (!passwordRegex.test(form.password.value)) {
    alert('Passwords must contain at least 8-20 characters, including uppercase, lowercase letters, numbers and special characters.');
    return false
  }

  return true;
}



// login = document.getElementById('login');
// homepage_container = document.getElementsByClassName('homepage-container')[0];

// login.addEventListener('click', () => {
//   homepage_container.style.display = 'none';
//   modal.style.display = "block";
// });

// window.addEventListener('click', (e) => {
//   if (e.target == modal) {
//     homepage_container.style.display = 'flex';
//     modal.style.display = "none";
//   }
// })

