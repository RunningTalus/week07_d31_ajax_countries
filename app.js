var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var countries = require('./models/countries.js'); //pulling from a .js file vs .json
var countries = require('./models/countries.json');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/countries', function(req, res) {
	// console.log('From app.js app.get');
	res.send(countries);
});

var server = app.listen(6983, function() {
	console.log('Express server listening on port ' + server.address().port);
});