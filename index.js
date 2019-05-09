  'use strict';
    require('dotenv').config();
    const express = require('express');
    const fs      = require('fs');
    const https   = require('https');
    const app = express();
    const bodyParser = require('body-parser');
    const passport = require('passport');
    const Strategy = require('passport-local').Strategy;

    const db = require('./utils/database');
    const mediaTable = require('./utils/media_table');


    //added
    const shell = require('shelljs');
    //const multer = require('multer');
  //const upload = multer({dest: 'public/uploads/'});

    //--------------------------------------------






    //----------------------------------------------

    //-----
    const multer = require('multer');
    const storage = multer.diskStorage({ // notice you are calling the multer.diskStorage() method here, not multer()
  destination: function(req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
    console.log(Date.now());
    console.log('file.filename:',  file.originalname);
    }
  });
    const upload = multer({storage});

    //-------


  const move = () => {
    console.log('move() started...');
    let newPath = write.path;
    return(newPath);
};

    const write = (oldPath, newPath) => {
    shell.echo('write() started...');
    let path = `'${oldPath}' , '${newPath}'`;
};

  app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // tietokantayhteys
    const connection = db.connect();
    console.log('server started');
    app.use(express.static('public'));
    app.use('/modules', express.static('node_modules'));

    app.get('/all', (req, res) => {
    mediaTable.select(connection, res);
    console.log('app get done');
    //res.send(200);
});

    const insert = () => {
    connection.execute(
    'INSERT INTO comment (restaurantID,userID,textComment,creationDate,deleteDate) VALUES (4, 5, "comment", "09:00:
    00", "09:00:00");',
    (err, results, fields) => {
    // console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
    if (err == null) {
    console.log(results);
} else {
    console.log(err);
}
},
    );
};
  const addMenu = (mealTypeID,mealPicture,mealName,mealDescription,mealPrice,mealID) => {
  shell.ls('public/menu.json').forEach(function (file) {
  console.log('adding menu.json info');
  let aaa = `,{\"mealTypeID\": \"${mealTypeID}\",
    \"mealPicture\":\"${mealPicture}\",
    \"mealName\": \"${mealName}\",
    \"mealDescription\": \"${mealDescription}\",
    \"mealPrice\": \"${mealPrice}\",
    \"mealID\": \"${mealID}\"}]`;
  let output = shell.sed('-i', ']', `${aaa}`, file);
});
};
  const selectMeal = () => {
  connection.query(
  `SELECT * FROM meal `,
  (err, results, fields) => {
  for(let i=0; i<3; i++) {
  console.log(results[i].mealTypeID);
  console.log(results[i].mealPicture);
  console.log(results[i].mealName);
  console.log(results[i].mealDescription);
  console.log(results[i].mealPrice);
  console.log(results[i].mealID);
  console.log('');
  addMenu(results[i].mealTypeID,results[i].mealPicture,results[i].mealName,results[i].mealDescription,results[i
].mealPrice,results[i].mealID);
}
  if (err == null) {
  // console.log(results);
} else {
  console.log(err);
}
},
  );
};
  //selectMeal();


  const selectMealType = () => {
  connection.query(
  `SELECT * FROM meal_type `,
  (err, results, fields) => {
  for(let i=0; i<results.length; i++) {
  //shell.touch(`public/restaurant${i}.json`);
  //addRestaurant(results[i].restaurantID,results[i].restaurantTypeID,results[i].restaurantPicture,results[i]
  .restaurantName,results[i].location,results[i].description,results[i].open,results[i].close,results[i].creationDate);
}
  if (err == null) {
  console.log(results);
} else {
  console.log(err);
}
},
  );
};
  //selectMealType();



  const selectMeals = () => {
  connection.query(
  `SELECT mealTypeName FROM meal_type WHERE mealTypeID = '1' ;`,
  (err, results, fields) => {

  if (err == null) {
  console.log(results);
} else {
  console.log(err);
}
},
  );
};
  //selectMeals();

  connection.query(
  'SELECT * FROM comment',
  (err, results, fields) => {
  //console.log(results); // results contains rows returned by server
  //console.log(fields); // fields contains extra meta data about results, if available
  //console.log(results[0].textComment);
  //console.log(results[1].textComment);
  //console.log(results[2].textComment);
  //console.log(results[3].textComment);

  if (err == null) {
  //console.log(results);
  //console.log(results[1].textComment);
  // res.send(results);
} else {
  console.log(err);
}
},
  );
  const cleanRestaurant = () => {
  shell.ls('public/restaurant.json').forEach(function (file) {
  console.log('clearing restaurant.json info');
  let aaa = `{\"restaurantTypeID\": \"${restaurantTypeID}\",
    \"restaurantPicture\":\"${restaurantPicture}\",
    \"restaurantName\": \"${restaurantName}\",
    \"location\": \"${location}\",
    \"description\": \"${description}\",
    \"open\": \"${open}\",
    \"restaurantID\": \"${restaurantID}\",
    \"close\": \"${close}\",
    \"creationDate\": \"${creationDate}\" }]`;
  let output = shell.sed('-i', ']', `${aaa}`, file);
});
};


  const addRestaurant = (restaurantID,restaurantTypeID,restaurantPicture,restaurantName,location,description,open,close
  ,creationDate,restaurantTypeName) => {
  shell.ls('public/restaurant.json').forEach(function (file) {

  console.log('adding restaurant.json info',restaurantTypeName);
  let aaa = `,{\"restaurantTypeID\": \"${restaurantTypeID}\",
    \"restaurantPicture\":\"${restaurantPicture}\",
    \"restaurantName\": \"${restaurantName}\",
    \"location\": \"${location}\",
    \"description\": \"${description}\",
    \"open\": \"${open}\",
    \"restaurantID\": \"${restaurantID}\",
    \"close\": \"${close}\",
    \"restaurantTypeName\": \"${restaurantTypeName}\",
    \"creationDate\": \"${creationDate}\" }]`;
  let output = shell.sed('-i', ']', `${aaa}`, file);
});


  shell.ls(`public/restaurant${restaurantID}.json`).forEach(function (file) {
  console.log('adding restaurant.json info');
  let aaa = `[{\"restaurantTypeID\": \"${restaurantTypeID}\",
    \"restaurantPicture\":\"${restaurantPicture}\",
    \"restaurantName\": \"${restaurantName}\",
    \"location\": \"${location}\",
    \"description\": \"${description}\",
    \"open\": \"${open}\",
    \"restaurantID\": \"${restaurantID}\",
    \"close\": \"${close}\",
    \"restaurantTypeName\": \"${restaurantTypeName}\",
    \"creationDate\": \"${creationDate}\" }]`;
  let output2 = shell.sed('-i', '', `${aaa}`, file);
});

};

  const select = () => {
  connection.query(
  'SELECT * FROM restaurant',
  (err, results, fields) => {
  // console.log(results.length); // results contains rows returned by server
  //console.log(fields); // fields contains extra meta data about results, if available
  for(let i=0; i<results.length; i++) {
  //      console.log('typeID next: ');
  //        console.log(results[i].restaurantTypeID);
  //        console.log(results[i].restaurantPicture);
  //        console.log(results[i].restaurantName);
  //        console.log(results[i].location);
  //        console.log(results[i].description);
  //        console.log(results[i].open);
  //        console.log(results[i].close);
  //        console.log(results[i].creationDate);
  //      console.log('id next:');
  //      console.log(results[i].restaurantID);
  //shell.rm(`public/restaurant${i+1}.json`);
  //shell.touch(`public/restaurant${i+1}.json`);
  let x =results[i].restaurantTypeID;
  //console.log('x: ',x);
  //   addRestaurant(results[i].restaurantID,results[i].restaurantTypeID,results[i].restaurantPicture,results[i].restau
  rantName,results[i].location,results[i].description,results[i].open,results[i].close,results[i].creationDate, resType
  (x));

        }


        if (err == null) {
  //console.log(results);
  //console.log(results[1].textComment);
          // res.send(results);
        } else {
          console.log(err);
        }
      },
  );
  };
  //select();

  const resType = (id) => {
          connection.query(
        `SELECT restaurantTypeName FROM restaurantType WHERE restaurantTypeID = ${id} `,
        (err, results, fields) => {
          if (err == null) {
            return(results[0].restaurantTypeName);
          } else {
            console.log(err);
          }
        },
    );
  };
  //resType(1);






  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  app.post('/image', upload.single('my-image'), (req, res, next) => {
                      // req body comes now from multer
  res.json({"filename": req.file.filename, "type": req.file.mimetype});
  //console.log(req.file.filename);
  console.log('done: app.post /image');
  next();

  const response = {
  message: 'File uploaded',
  file: req.file,
};
  // console.log('response: ', response);
  //console.log('req.file.originalname: ', req.file.originalname);
  //console.log('path: ', req.file.path); //path to image
  //console.log('image/file type: ', req.file.mimetype); //imagetype, 'image/png'
                 //console.log('destination: ', req.file.destination); //  '/public/uploads/'
    const newName = req.file.originalname;
    const newPath = req.file.destination + newName;
    const oldPath = req.file.path;
    //console.log(newName);
    //console.log(newPath);
    //console.log(oldPath);
    //console.log(`'${oldPath}' , '${newPath}'`);

    let strNew = newPath;
    let strOld = oldPath;

  //console.log('aaa');
  req.file.path = newPath;
  // console.log('sss');
  const pub = 'public/';
  // strNew = strNew.replace("public", "/app");
  // strOld = strOld.replace("public", "/app");

  //console.log('Old: ',strOld );
 // console.log('New: ',strNew );
  //res.send({filename:FileName});
  write(strOld, pub);
});

module.exports = {
  move: move
};


const addImg = (one,two,three,four,five) => {
shell.ls('public/images.json').forEach(function (file) {
  const newImg = '{\"mediaUrl\":\"'
  let urli = two;
  const endi = '\"}]';
  //"{\"media.Title\": \"${one}\",\"mediaType\": \"image\/jpeg\",\"mediaOwner\": \"2\",\"mediaUrl\": \"${two}\",\"media
  Thumb\": \"${two}\"}]"
  console.log(newImg+two+endi);
  //shell.ls('public/*.json').forEach(function (file) {
  console.log('-',one,'--',two,'---');
  //let output = shell.sed('-i', ']', `,{\"mediaUrl\":\"  ${two}\", \"mediaTitle\": \" ${one} \"}]`, file);
  let aaa = `,{\"mediaID\": \"71\",
    \"mediaTitle\":\"${one}\",
    \"mediaType\": \"image\\/jpeg\",
    \"mediaOwner\": \"${five}\",
    \"mediaReview\": \"${four}\",
    \"mediaDate\": \"2016-11-16 22:47:25\",
    \"mediaUrl\": \"${two}\",
    \"mediaThumb\": \"${two}\" }]`;

    let output = shell.sed('-i', ']', `${aaa}`, file);


});
}

  //-------------------------------
  app.use('/image', (req, res, next) => {
  // lisää kuvan tiedot tietokantaan
  console.log('done:  app.use image added');
  const data = [
  req.body.Name,
  req.body.Description,
  //req.body.details,
  //'thumbs/' + req.file.filename,
  //'medium/' + req.file.filename,
  '/app/uploads/' + req.file.filename,
  //req.coordinates,
  //1, // dummy userID
];
  // mediaTable.insert(data, connection, res);
  //console.log('data: -----', data);
  //console.log('res: ----- ', res);
  console.log(req.body.field1);
  console.log(req.body.field2);
  console.log(req.body.field3);
  console.log(req.body.field4);
  addImg(req.body.field1, req.file.originalname, req.body.field2, req.body.field3, req.body.field4,);
});

  //----------------------------------

  passport.use(new Strategy(
  (username, password, done) => {
  console.log(`login? ${username}`);
  //Normally, select * from users where username=?
  if(username != process.env.USR && password != process.env.PWD) {
  console.log('login failed');
  return done(null, false);
}
  console.log('login ok');
  return done(null, {name: username});
}
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
  app.use(require('body-parser').urlencoded({ extended: true }));
  app.use(require('express-session')({ secret: process.env.SEC, resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());

  console.log('Alive we ride');

  const sslkey  = fs.readFileSync(process.env.KEY);
  const sslcert = fs.readFileSync(process.env.CERT);
  const options = {
  key: sslkey,
  cert: sslcert
};


  app.get('/', (req, res) => {
  console.log(req);
  if (req.secure) res.send('https :) and hello' + req.user.name);
  else res.send('hello not secure?');
});
  app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
  res.redirect('/app/');
});
  app.post('/',
  (req, res) => {
  console.log(req.body);
  res.send('POST: Hello ' + req.body.name);
});
  app.get('/test', (req, res) => {
  console.log(req.query);
  res.send(`Hello ${req.query.name}!`);
});

  app.listen(3000); //normal http traffic
  https.createServer(options, app).listen(8000); //https traffic'use strict';




