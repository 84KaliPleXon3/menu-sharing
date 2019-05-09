'use strict';

const showRes = (images) => {
  images.forEach((image) => {

    const html = `
    <div class="restaurant-name">
        <h1>${image.restaurantName}</h1>
        <h3 class="grey">${image.restaurantTypeName}</h3>
    </div>
    <div class="restaurant-open">
        <h1>Open hours</h1>
        <h3 class="grey">${image.open} - ${image.close}</h3>
    </div>
    <div class="rating">
        <img src="uploads/${image.rating}star.png" alt="" height="70px">
    </div>`;
    // At the end of the loop print the HTML into <ul> element using innerHTML.
    document.querySelector('#restaurant').innerHTML += html;
  });
};
/* */
fetch('restaurant1.json').then((response) => {

  return response.json();
}).then((images) => {
  console.log(images);
  showRes(images);
});


//restaurant.json
