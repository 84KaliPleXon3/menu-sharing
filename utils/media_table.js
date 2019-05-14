'use strict';
const select = (connection, res) => {
  // simple database query for restaurant information
  connection.query(
'SELECT *,DATE_FORMAT(open, "%H:%i") as openf,DATE_FORMAT(close, "%H:%i") as closef,restaurantType.restaurantTypeName FROM restaurant INNER JOIN restaurantType ON restaurant.restaurantTypeID=restaurantType.restaurantTypeID',
      (err, results, fields) => {
         console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        if (err == null) {
          res.send(results);
        } else {
          console.log(err);
        }
      },
  );
};

//testing...
const selectMeals = (connection, res) => {
  // simple query
  connection.query(
'SELECT * FROM meal',
      (err, results, fields) => {
         console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        if (err == null) {
          res.send(results);
        } else {
          console.log(err);
        }
      },
  );
};



//Food Searches...
const selectMains = (connection, res) => {
  // simple query
  connection.query(
      'SELECT mealPicture, mealName, mealDescription, mealPrice, restaurantMeal.restaurantID\n' +
      'FROM meal\n' +
      'INNER JOIN restaurantMeal ON meal.mealID = restaurantMeal.mealID\n' +
      'Where meal.mealTypeID =1',
      (err, results, fields) => {
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        if (err == null) {
          res.send(results);
        } else {
          console.log(err);
        }
      },
  );
};
const selectAppetizers = (connection, res) => {
  // simple query
  connection.query(
      'SELECT mealPicture, mealName, mealDescription, mealPrice, restaurantMeal.restaurantID\n' +
      'FROM meal\n' +
      'INNER JOIN restaurantMeal ON meal.mealID = restaurantMeal.mealID\n' +
      'Where meal.mealTypeID =2',
      (err, results, fields) => {
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        if (err == null) {
          res.send(results);
        } else {
          console.log(err);
        }
      },
  );
};
const selectDesserts = (connection, res) => {
  // simple query
  connection.query(
      'SELECT mealPicture, mealName, mealDescription, mealPrice, restaurantMeal.restaurantID\n' +
      'FROM meal\n' +
      'INNER JOIN restaurantMeal ON meal.mealID = restaurantMeal.mealID\n' +
      'Where meal.mealTypeID =3',
      (err, results, fields) => {
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        if (err == null) {
          res.send(results);
        } else {
          console.log(err);
        }
      },
  );
};
const selectDrinks = (connection, res) => {
  // simple query
  connection.query(
      'SELECT mealPicture, mealName, mealDescription, mealPrice, restaurantMeal.restaurantID\n' +
      'FROM meal\n' +
      'INNER JOIN restaurantMeal ON meal.mealID = restaurantMeal.mealID\n' +
      'Where meal.mealTypeID =4',
      (err, results, fields) => {
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        if (err == null) {
          res.send(results);
        } else {
          console.log(err);
        }
      },
  );
};
//end of food searches..


const selectReviews = (connection, res) => {
  // simple query
  connection.query(
'SELECT commentID, comment.restaurantID, textComment, creationDate, deleteDate, restaurantRating.ratingValue FROM comment INNER JOIN restaurantRating WHERE comment.restaurantID = restaurantRating.restaurantID',
      (err, results, fields) => {
        console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        if (err == null) {
          res.send(results);
        } else {
          console.log(err);
        }
      },
  );
};





//review upload MEDIA_TABLE
const insert = (data, connection, res) => {
  connection.execute(
      'INSERT INTO Comment (commentID, restaurantID, userID, userName, textComment,creationDate,deleteDate) VALUES (?, ?, ?, ?, ?, ?, ?);',
      data,
      (err, results, fields) => {
         console.log(results); // results contains rows returned by server
         console.log(fields); // fields contains extra meta data about results, if available
        if (err == null) {
          console.log(results);
        } else {
          console.log(err);
        }
      },
  );
};



module.exports = {
  select: select,
  selectMeals: selectMeals,
  selectMains: selectMains,
  selectAppetizers: selectAppetizers,
  selectDesserts: selectDesserts,
  selectDrinks: selectDrinks,
  selectReviews: selectReviews,
  insert: insert,
};



