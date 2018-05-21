// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");
// Set up our connection information
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "ground12",
    database: "burgers"
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