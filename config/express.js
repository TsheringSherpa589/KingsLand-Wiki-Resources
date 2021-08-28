const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


module.exports = (app) => {
//TODO: setup the view engine
    app.set("view engine", "hbs");
    app.engine(
	"hbs",
	exphbs({
		extname: "hbs",
		defaultLayout: "",
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views",
	})
);
 //TODO: Setup the static files   
app.use(express.static("static"));


//TODO: Setup the body parser

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
