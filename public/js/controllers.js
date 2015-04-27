/* Controller used to show most active rooms. */
chatApp.controller('HomeCtrl', ["$scope", function HomeCtrl($scope){
	"use strict";
	$scope.rooms = [];
	$scope.no = 'hi';
	this.yo = 'mate';
}]);

chatApp.filter('reverse', function(){
	return function(text){
		return text.split('').reverse().join('');
	};
});

chatApp.directive('tester', [function(){
	return{
		restrict: 'E',
		transclude: true,
		template: "hello there <span ng-transclude></span>",
		scope: {
			rude: "@"
		},
		link: function(scope, element, attr){
			scope.bar = 'bate';
		}
	}; 
}]);

chatApp.factory('coo', [function(){
	return {
		cow: function(){
			return 'wut the';
		},
		moo: function(){
			return 'nooo';
		},
		weed: function(){
			return 'baba';
		}
	};
}]);


chatApp.factory('boo', ['coo', function(coo){
	return {
		cow: function(val){
			return val + 'wut the' + coo.cow();
		},
		moo: function(){
			return 'nooo';
		},
		weed: function(){
			return 'baba';
		}
	};
}]);


chatApp.controller('randoCtrl', function($scope, boo){
	$scope.yodawg = function(){
		return boo.weed() + '!';
	};

	$scope.hi = function(){
		return Math.random();
	}

	$scope.time = function(){
		return Date.now();
	}
	$scope.hello = 'hey there';
});