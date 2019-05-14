'use strict';

const submit = document.getElementById('Submit');

// When submit is pressed this checks if every field is given.

const validate = (event) => {

  event.preventDefault();

  const username = document.loginForm.uname;
  const password = document.loginForm.psw;

  if (username.value === ''  ) {
    username.style.border = '2px solid red';
    alert('No blank values allowed');
    return false;
  } else if(password.value === '') {
    username.style.border = '1px solid #ccc';
    alert('No blank values allowed');
    password.style.border = '2px solid red';
    return false;
  }else {
    password.style.border = '1px solid #ccc';
    document.loginForm.submit();
    alert('You are logged in');
    return true;
  }

};

submit.addEventListener('submit', validate);

const myFunction = () => {
  document.getElementById('myDropdown').classList.toggle('show');
};

window.onclick = (e) => {
  if (!e.target.matches('.linkkinap')) {
    const myDropdown = document.getElementById('myDropdown');
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};

