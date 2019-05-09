'use strict';
//const script = require('script');
//test
//const  index = require('./index');
//http://10.114.32.53/app/main.js







// upload image ********************
const frm = document.querySelector('#mediaform');

const sendForm = (evt) => {
  evt.preventDefault();
  const fd = new FormData(frm);
  const settings = {
    method: 'post',
    body: fd,
  };

  fetch('./image', settings).then((response) => {
    return response.json();
  }).then((json) => {
    console.log('fetch json: ',json);
    // update list
    getData();
    frm.reset();
  });
  document.getElementById("overlay").style.display = "none";
  location.reload();
};

function move(){
//let aaa = index.move();
  console.log('move: ');
}



frm.addEventListener('submit', sendForm);
// *********************************


frm.addEventListener('submit', sendForm);
// *********************************

function getFiles(dir){
  let fileList = [];
  console.log('reading files...');
  var files = fs.readdirSync(dir);
  for(var i in files){
    if (!files.hasOwnProperty(i)) continue;
    var name = dir+'/'+files[i];
    if (!fs.statSync(name).isDirectory()){
      fileList.push(name);
      console.log(fileList);
    }
  }
  return fileList;
}

