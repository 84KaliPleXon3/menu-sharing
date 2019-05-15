'use strict';

const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const db = require('./utils/database');
const mediaTable = require('./utils/media_table');
const fs = require('fs');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const app = express();
const multer = require('multer');

// tietokantayhteys
const connection = db.connect();


//login

passport.use(new Strategy(
    (uname, psw, done) => {
      console.log(`login? ${uname}`);
      //Normally, select * from users where username=?',[uname],
      connection.query(
          'SELECT * FROM user WHERE userName = ? AND passwordHash = ?',
          [uname, psw],
          (err, results, fields) => {
            console.log(results);
            if (results.length === 0) {
              console.log('login failed');
              return done(null, false);
            }
            console.log('login ok');
            return done(null, {name: username});
          });
    },
));

passport.serializeUser((user, done) => {
  console.log('session serialize');
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('session deserialize');
    
    
    
  done(null, user);
});

app.use(require('serve-static')(__dirname + '/public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('express-session')(
    {secret: process.env.SEC, resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

console.log('Alive we ride');

const sslkey = fs.readFileSync(process.env.KEY);
const sslcert = fs.readFileSync(process.env.CERT);
const options = {
  key: sslkey,
  cert: sslcert,
};

app.get('/', (req, res) => {
  console.log(req);
  if (req.secure) res.send('https :) and hello' + req.user.name);
  else res.send('hello not secure?');
});

app.post('/login',
    passport.authenticate('local', {failureRedirect: '/login'}),
    (req, res) => {
      res.redirect('/');
});


app.use(express.static('public'));
app.use('/modules', express.static('node_modules'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/all', (req, res) => {
  mediaTable.select(connection, res);
  //console.log('');
  // res.send(200);
});



/* for testing...-------------------
app.get('/meals', (req, res) => {
  mediaTable.selectMeals(connection, res);
  console.log('/meals');
  // res.send(200);
});
*/


app.get('/mains', (req, res) => {
  mediaTable.selectMains(connection, res);
  console.log('/meals');
  // res.send(200);
});


app.get('/appetizers', (req, res) => {
  mediaTable.selectAppetizers(connection, res);
  console.log('/meals');
  // res.send(200);
});



app.get('/desserts', (req, res) => {
  mediaTable.selectDesserts(connection, res);
  console.log('/meals');
  // res.send(200);
});

app.get('/drinks', (req, res) => {
  mediaTable.selectDrinks(connection, res);
  console.log('/meals');
  // res.send(200);
});



app.get('/reviews', (req, res) => {
  mediaTable.selectReviews(connection, res);
  console.log('/reviews');
  // res.send(200);
});




//INDEX.JS
app.use('/upload', (req, res, next) => {
  // lisää kuvan tiedot tietokantaan
  console.log('done:  app.use image added');
  const data = [
    1,//comment id
    req.body.restaurantID,//restaurantID
    1,//user ID
    req.body.field2, //title as 'username'
    req.body.field3, //text comment/review
    req.body.star_value, //creationDate changed to rating info
    "10:00:00", //deleteDate ???
  ];
  console.log(data);
  mediaTable.insert(data, connection, res);
});


//Registration



app.listen(3000);
 

