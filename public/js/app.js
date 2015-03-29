"use strict";
var chatApp = angular.module('chatApp', ["ngRoute", "angularMoment"]);

chatApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', { templateUrl: 'templates/home.html', controller: "HomeCtrl" }).
		otherwise({ redirectTo: '/' });
}]);
	