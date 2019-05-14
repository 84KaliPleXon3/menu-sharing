'use strict';

const mysql = require('mysql2');


const connect = () => {
  // create the connection to database
  const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    connectionLimit : 10,
  });
  return connection;
};

module.exports = {
  connect: connect,
};
