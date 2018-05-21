var connection = require('./connection');

// Object Relational Mapper (ORM)


let orm = {

    //selectAll()
    //Select and return all
    selectAll: function(tableInput, cb){
        //MySQL query 
        var queryString = "SELECT * FROM " + tableInput + ";";
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
        var queryString = "INSERT INTO " + table;
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
        var queryString = "UPDATE " + table;
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

}

module.exports = orm;