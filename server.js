// Importing express server module
const express = require("express");
// Importing express handlebars module
const exphbs = require("express-handlebars");

// Setting the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Setting the Express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Starting the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});