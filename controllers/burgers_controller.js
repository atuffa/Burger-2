//===============================
// Controller setup
//===============================

var express = require("express");

//Router for the app, and export the router at the end of your file.

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger");

// Create all routes and set up logic within those routes where required

router.get('/', function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function(req, res) {
    burger.create(
        [ "burger_name"
    ], [
        req.body.burger_name,
    ], function(result) {
    // Send back the ID of the new burger
    res.redirect('/');
    });
});

router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.update({
        devoured: true
    }, function(result) {
         res.redirect('/')
    });
});

// Export routes for server.js to use.
module.exports = router;