// TODO: Require Controllers...
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
//const jwt = require('jsonwebtoken');
//const bcrypt  = require('bcrypt');
const cookieParser = require('cookie-parser');
const Article = require('../models/Article');
const User = require('../models/User');


module.exports = (app) => {

    app.get("/", function (req,res) {
        res.render("index");
    });


}
