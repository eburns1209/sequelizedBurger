var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mysql = require('mysql');
var router = require('router');
var models = require('./models');
models.sequelize.sync({});

var app = express();
var port = 3000;

// Requiring our models for syncing
var Burger = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var PORT = 3000;
app.listen(PORT, function (){
console.log("Listening on port: " + PORT);
});