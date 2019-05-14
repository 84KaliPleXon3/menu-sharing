'use strict';

const myFunction = () => {
  document.getElementById('myDropdown').classList.toggle('show');
};

window.onclick = (e) => {
  if (!e.target.matches('.linkkinap')) {
    const myDropdown = document.getElementById('myDropdown');
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};

/*Katjan funktiot*/

/*Navigation tabs - "Menu", "Reviews","Location"*/

const openTab = (evt, tabName) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
};

// by default we see content of tab "Menu"

document.getElementById('defaultOpen').click();

// by default all "meals" are hidden

const meal_mean = document.getElementsByClassName('meal-mean');

for (let i = 0; i < meal_mean.length; i++) {
  meal_mean[i].style.display = 'none';
}

const meal_app = document.getElementsByClassName('meal-app');
for (let i = 0; i < meal_app.length; i++) {
  meal_app[i].style.display = 'none';
}

const meal_des = document.getElementsByClassName('meal-des');
for (let i = 0; i < meal_des.length; i++) {
  meal_des[i].style.display = 'none';
}


const meal_drinks = document.getElementsByClassName('meal-drinks');
for (let i = 0; i < meal_drinks.length; i++) {
  meal_drinks[i].style.display = 'none';
}


//ends "hiding meals" block

//if user clicks "typeOfFood" (for example, Mains or Appetizers etc.) then all meals in this category are shown

const mains = document.getElementById('mains');
const appetizers = document.getElementById('appetizers');
const deserts = document.getElementById('deserts');
const drinks = document.getElementById('drinks');
const span = document.getElementById('icon1');
const span1 = document.getElementById('icon2');
const span2 = document.getElementById('icon3');
const span3 = document.getElementById('icon4');

// "show meals" block for "Mains"

mains.addEventListener('click', () => {

  for (let i = 0; i <
  document.getElementsByClassName('meal-mean').length; i++) {
    console.log(document.getElementsByClassName('meal-mean')[i]);
    if (document.getElementsByClassName('meal-mean')[i].style.display ===
        'none') {
      document.getElementsByClassName('meal-mean')[i].style.display = 'block';
      span.innerText = '▽';
    } else {
      document.getElementsByClassName('meal-mean')[i].style.display = 'none';
      span.innerText = '▷';
    }

  }

});

// "show meals" block for "Appetizers"

appetizers.addEventListener('click', () => {

  for (let i = 0; i < document.getElementsByClassName('meal-app').length; i++) {
    console.log(document.getElementsByClassName('meal-app')[i]);
    if (document.getElementsByClassName('meal-app')[i].style.display ===
        'none') {
      document.getElementsByClassName('meal-app')[i].style.display = 'block';
      span1.innerText = '▽';
    } else {
      document.getElementsByClassName('meal-app')[i].style.display = 'none';
      span1.innerText = '▷';
    }

  }

});

// "show meals" block for "Desserts"

deserts.addEventListener('click', () => {


  for (let i = 0; i < document.getElementsByClassName('meal-des').length; i++) {
    console.log(document.getElementsByClassName('meal-des')[i]);
    if (document.getElementsByClassName('meal-des')[i].style.display ===
        'none') {
      document.getElementsByClassName('meal-des')[i].style.display = 'block';
      span2.innerText = '▽';
    } else {
      document.getElementsByClassName('meal-des')[i].style.display = 'none';
      span2.innerText = '▷';
    }

  }

});

// "show meals" block for "Drinks"

drinks.addEventListener('click', () => {

  for (let i = 0; i <
  document.getElementsByClassName('meal-drinks').length; i++) {
    console.log(document.getElementsByClassName('meal-drinks')[i]);
    if (document.getElementsByClassName('meal-drinks')[i].style.display ===
        'none') {
      document.getElementsByClassName('meal-drinks')[i].style.display = 'block';
      span3.innerText = '▽';
    } else {
      document.getElementsByClassName('meal-drinks')[i].style.display = 'none';
      span3.innerText = '▷';
    }

  }

});



/*Star rating: user rates the restaurant (how many stars: 1,2,3,4,5) and can see this number in the text field*/

console.log(document.getElementsByName('rate').length);

const rate = document.getElementsByName('rate');

const p = document.getElementById('rating_value');

for (let i = 0; i < document.getElementsByName('rate').length; i++) {

  document.getElementsByName('rate')[i].addEventListener('click', () => {

    if (document.getElementsByName('rate')[i].checked === true) {

      const ratingValue = document.getElementsByName('rate')[i].value;

      console.log(ratingValue);

      if (ratingValue === '5') {p.value = 5;} else if (ratingValue ===
          '4') {p.value = 4;} else if (ratingValue ===
          '3') {p.value = 3;} else if (ratingValue ===
          '2') {p.value = 2;} else {p.value = 1;}

    }


  });
}

// Show overlay of upload form

const on = () => {
  document.getElementById('overlay').style.display = 'block';
};

// Hide overlay of upload form
const off = () => {
  document.getElementById('overlay').style.display = 'none';
};
