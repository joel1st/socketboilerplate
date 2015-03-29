"use strict";
	/*  Directive to determine/set the height of the message box and 
	ensure it keeps scrolled to the bottom on new messages */
chatApp.directive('tester', ["$window", function($window){
	return{
		restrict: 'A',
		link: function(scope, element, attr){
		}
	}; 
}]);