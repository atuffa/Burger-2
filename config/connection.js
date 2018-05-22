// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
let mysql = require("mysql");
// Set up our connection information
let connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "ground12",
    database: "burgers_db"
  });

  connection.connect(function(err){
    if(err){
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log("connection as id " + connection.threadId);

  });

  //Export Connection
  module.exports = connection;