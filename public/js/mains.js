'use strict';

//Creates HTML elements to display main course(s) from database
const showMenu = (json) => {
  json.forEach((i) => {
    //selects correct restaurant menu items for the page
    if (i.restaurantID === idM+1) {

      const html = `<div class="meal-mean">
        <div class="meal-image">
        <img src="${i.mealPicture}" alt="missing" height="100px">
        </div>

        <div class="mealnd"><h3>${i.mealName}</h3>
    <h4 class="grey">${i.mealDescription}</h4>
    </div>
    <div class="price">
        <h2>${i.mealPrice}</h2>
    </div>
    </div>`;

      // At the end of the loop print the HTML into <ul> element using innerHTML.
      document.querySelector('#mainMeal').innerHTML += html;
//};


    }
  });
};

//checks witch restaurant info to display based on url parameters from homepage link
const idM =  window.location.href.split('?id=')[1]-1;

//triggers database query for main course(s) in restaurant
fetch('/app/mains').then(response => {
  console.log(response.json);
  return response.json();
})
.then(json => {
  console.log(json);
  showMenu(json);
});

