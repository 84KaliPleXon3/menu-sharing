'use strict';

const showMenu = (json) => {
  json.forEach((i) => {
    const html = `<div class="restcontainer">
        <a href="restaurant_page.html?id=${i.restaurantID}" id="link${i.restaurantID}">
                <img src="${i.restaurantPicture}" alt="${i.restaurantName}">

                <div class="review">
                    <div class="nameof">
                        <h2>${i.restaurantName}</h2> <h4>${i.location}</h4>

                    </div>
                    <div class="text">
                        <p>${i.restaurantTypeName}</p>
                        <p>${i.openf} - ${i.closef}</p>
                        <p>${i.description}</p>
                    </div>
                </div>
                <div class="info">
                    <h3>&#11088;</h3>
                    <!--  <img src="" alt="">  -->
                </div>
        </a>`;
    // At the end of the loop print the HTML into <ul> element using innerHTML.
    document.querySelector('#resList').innerHTML += html;
  });
};
//const message = document.getElementById('reslist');

fetch('/app/all').then(response => {
  console.log(response.json);
  return response.json();
})
.then(json => {
  console.log(json);
  showMenu(json);
  //message.innerHTML=json[0].name;
});


