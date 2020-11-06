// Importing express server module
const express = require("express");
// Importing express handlebars module
const exphbs = require("express-handlebars");

// Setting the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Setting the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Starting the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});