'use strict';

const showMenu = (images) => {
  images.forEach((image) => {
    const html = `<div class="restcontainer">
        <a href="restaurant_page.html" id="link${image.restaurantID}">
                <img src="${image.restaurantPicture}" alt="${image.restaurantName}">

                <div class="review">
                    <div class="nameof">
                        <h2>${image.restaurantName}</h2> <h4>${image.location}</h4>

                    </div>
                    <div class="text">
                        <p>${image.description}</p>
                        <p>${image.open}-${image.close}</p>

                    </div>
                </div>
                <div class="info">
                    <h3>Rating</h3>
                    <img src="uploads/4star.png" alt="">
                </div>
        </a>`;
    // At the end of the loop print the HTML into <ul> element using innerHTML.
    document.querySelector('#resList').innerHTML += html;
  });
};

fetch('restaurant.json').then((response) => {

  return response.json();
}).then((images) => {
  console.log(images);
  showMenu(images);
});

