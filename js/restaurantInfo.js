'use strict';

//Creates HTML elements to display restaurant(s) from database
const showRestaurant = (i) => {
  const html = `<div class="restaurant-name">
        <h1>${i[id].restaurantName}</h1>
        <h3 class="grey">${i[id].restaurantTypeName}</h3>
    </div>
    <div class="restaurant-open">
        <h1>Open hours</h1>
        <h3 class="grey">${i[id].openf} - ${i[id].closef}</h3>
    </div>
    <div class="rating">
        <h1>&#11088;</h1>
        <h2>4.3</h2>
    </div>`;
  // At the end of the loop print the HTML into <ul> element using innerHTML.
  document.querySelector('#resInfo').innerHTML += html;
};


//checks witch restaurant info to display based on url parameters from homepage link

const id =  window.location.href.split('?id=')[1]-1;
//document.getElementById("resList").value = id+1; //test element


//triggers database query for restaurant(s)
fetch('/app/all').then(response => {
  console.log(response.json);
  return response.json();
})
.then(json => {
  console.log(json);
  showRestaurant(json);
});
