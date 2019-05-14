'use strict';

const username = document.registrationForm.uname;
const psw = document.registrationForm.psw;
const repsw = document.registrationForm.repsw;
const regform = document.registrationForm;

// When submit is pressed this checks if every field is given.

regform.addEventListener('submit',(evt)=> {

  evt.preventDefault();

  if (username.value === ''  ) {
    username.style.border = '2px solid red';
    alert('No blank values allowed');
    return false;
  }else if(psw.value === '') {
    username.style.border = '1px solid #ccc';
    alert('No blank values allowed');
    psw.style.border = '2px solid red';
    return false;
  }else if (psw.value !== repsw.value) {
    psw.style.border = '2px solid red';
    repsw.style.border = '2px solid red';
    alert ("Passwords don't match")
  } else {
    psw.style.border = '1px solid #ccc';
    repsw.style.border = '1px solid #ccc';
    document.registrationForm.submit();
    alert('You are logged in');
    return true;
  }
});

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

