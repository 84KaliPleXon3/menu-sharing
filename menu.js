'use strict';

const showMenu = (images) => {
  images.forEach((image) => {
    const html = `<div id="Menu" class="tabcontent" >
    <div class="typeOfFood" id="mains">
        <h2><span id="icon${image.mealTypeID}"></span>${image.mealID}</h2>
    </div>
    <div class="meal-mean">
        <div class="meal-image">
            <img src="${image.mealPicture}"
                 height="100px">
        </div>
        <div class="mealnd"><h3>${image.mealName}</h3>
            <h4 class="grey">${image.mealDescription}</h4>
        </div>
        <div class="price">
            <h2>${image.mealPrice}</h2>
        </div>
    </div>
</div>`;
    // At the end of the loop print the HTML into <ul> element using innerHTML.
    document.querySelector('#menu').innerHTML += html;
  });
};

fetch('menu.json').then((response) => {

  return response.json();
}).then((images) => {
  console.log(images);
  showMenu(images);
});


//restaurant.json
