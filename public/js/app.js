"use strict";
var chatApp = angular.module('chatApp', ["ngRoute"]);

chatApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', { templateUrl: 'templates/home.html', controller: "HomeCtrl" }).
		otherwise({ redirectTo: '/' });
}]);
	