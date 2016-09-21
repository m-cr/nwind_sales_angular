var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'browser')));

app.use('/api/salesperson', require('./routes/salesperson'));
app.use('/api/region', require('./routes/region'));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, 'browser/index.html'));
});

app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;