'use strict';


fetch('/app/all').then(response => {
  console.log(response.json);
  return response.json();
})
.then(json => {
  console.log(json);
});


const frm = document.querySelector('#uploadform');
frm.addEventListener('submit', sendForm);

const sendForm = (evt) => {
  evt.preventDefault();
  const fd = new FormData(frm);
  const settings = {
    method: 'post',
    body: fd,
  };

  fetch('./upload', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log('main json',json);
    frm.reset();
  });
};
