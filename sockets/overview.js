"use strict";

module.exports = function(io){
	var home = io.of('/home');
	home.on('connection', function(socket){
	    console.log('connection made!');

	});
};
