//jshint esversion:8

/*
TODO:
- Test e-mail attachment functionality with different file extensions.
- Implement more robust error handling
- file deletion when e-mails have been sent successfully
- applicant confirmation e-mails.
*/
//adding all required dependencies/packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require("fs");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var nodemailer = require('nodemailer');
const multer = require('multer')

//specifies that this app will be using express.
const app = express();

//multer middle-ware. Needed for downloaded files from HTML forms
var upload = multer({ storage: storage });

//middleware for processing POST requests a bit easier.
app.use(bodyParser.urlencoded({extended: false}));

//Allow the use of static files in project directory
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/html"));
app.use(express.static(__dirname + "/resources"));


//Start-up behaviour.
var port = process.env.PORT || config.server.port; //process.env.port will only be used if running on heroku
app.listen(port, function() {
    console.log("You may access the server locally via: http://localhost:" + port);
  });
