'use strict';
const showLoc = (images) => {
  images.forEach((image) => {
    const html = `
<h3>Location</h3>
    <p>${image.location}</p>
`;
    // At the end of the loop print the HTML into <ul> element using innerHTML.
    document.querySelector('#loc').innerHTML += html;
  });
};

fetch('restaurant1.json').then((response) => {

  return response.json();
}).then((images) => {
  console.log(images);
  showLoc(images);
});
