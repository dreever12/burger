//server practice


// requiring packages
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


//calling express since express is a function?
var app = express();

//serving static code so express can you the HTMLtemplate
app.use(express.static(process.cwd() + '/public/'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse application/json
app.use(bodyParser.json());

