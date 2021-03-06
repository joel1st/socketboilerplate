"use strict";
var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect('mongodb://localhost/'+config.mongoDbName);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
	console.log('Connection Made!');
});
