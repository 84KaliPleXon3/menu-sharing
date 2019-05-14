'use strict';

//Creates HTML elements to display drink(s) from database
const showDrinks = (json) => {
  json.forEach((i) => {
    //selects correct restaurant menu items for the page
    if (i.restaurantID === idDr+1) {
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
      document.querySelector('#drinkMeal').innerHTML += html;
    }
  });
};

//checks witch restaurant info to display based on url parameters from homepage link
const idDr =  window.location.href.split('?id=')[1]-1;

//triggers database query for drink(s) in restaurant
fetch('/app/drinks').then(response => {
  console.log(response.json);
  return response.json();
})
.then(json => {
  console.log(json);
  showDrinks(json);
});

