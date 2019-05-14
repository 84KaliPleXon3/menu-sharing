'use strict';

//Creates HTML elements to display comment(s) from database
const showReviews = (json) => {
  json.forEach((i) => {
    //selects correct restaurant review(s) for the page
    if (i.restaurantID === idRe+1){
      const html = `<div class="restcontainer">
        <img src="Kuvat/vapiano.jpg" alt="image">
        <div class="review">
            <div class="revtitle">
                <h3>UserName</h3>
                <h2>Title</h2>
            </div>
            <div class="revtext">
                <h6>${i.creationDate}</h6>
                <p>${i.textComment}</p>
            </div>
        </div>
        <div class="revrating">
            <h3>&#11088;</h3>
            <h2>${i.ratingValue}</h2>
        </div>
    </div>`;


      // At the end of the loop print the HTML into <ul> element using innerHTML.
      document.querySelector('#review').innerHTML += html;
    }
  });
};


//checks witch restaurant info to display based on url parameters from homepage link
const idRe =  window.location.href.split('?id=')[1]-1;


//triggers database query for review(s) for restaurant
fetch('/app/reviews').then(response => {
  console.log(response.json);
  return response.json();
})
.then(json => {
  console.log(json);
  showReviews(json);
});

