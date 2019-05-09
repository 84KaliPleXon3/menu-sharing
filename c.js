'use strict';

const showImages = (images) => {
  images.forEach((image) => {
    const html = `
        <div class="restcontainer">
        <img src="/app/uploads/${image.mediaThumb}" alt="ReviewImage">
        <div class="review">
        <div class="revtitle">
        <h2>${image.mediaTitle}</h2>
        </div>
        <div class="revtext">
        <p>${image.mediaReview}</p>
        </div>
        </div>
        <div class="revrating">
        <h3>Rating</h3>
        <img src="uploads/${image.mediaOwner}star.png" alt="">
        </div>
        </div>`;
    // At the end of the loop print the HTML into <ul> element using innerHTML.
    document.querySelector('#review').innerHTML += html;
  });
};

fetch('images.json').then((response) => {

  return response.json();
}).then((images) => {
  console.log(images);
  showImages(images);
});


const rate = document.getElementsByName('rate');

const p = document.getElementById('myRange');

for (let i = 0; i < document.getElementsByName('rate').length; i++) {

  document.getElementsByName('rate')[i].addEventListener('click', () => {

    if (document.getElementsByName('rate')[i].checked == true) {

      const ratingValue = document.getElementsByName('rate')[i].value;

      console.log(ratingValue);

      if (ratingValue === '5') {p.value = 5;} else if (ratingValue ===
          '4') {p.value = 4;} else if (ratingValue ===
          '3') {p.value = 3;} else if (ratingValue ===
          '2') {p.value = 2;} else {p.value = 1;}

    }
    ;

  });
};
