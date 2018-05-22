let connection = require('./connection');

// Object Relational Mapper (ORM)

// Helper function for SQL syntax.

// The below helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax

function objToSql(ob) {
    let arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
        arr.push(key + "=" + value);
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
}
  
  

let orm = {

    //selectAll()
    //Select and return all
    selectAll: function(tableInput, cb){
        //MySQL query 
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
      
    },

    //insertOne()
    //Create 
    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        //MySQL query
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
        
            cb(result);
        });
      
    },

    //updateOne()
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        //MySQL query
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
        });
      

    }

};

module.exports = orm;