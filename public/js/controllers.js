"use strict";

/* Controller used to show most active rooms. */
chatApp.controller('HomeCtrl', ["$scope", "$location", "Socket", function($scope, $location, Socket){
	$scope.rooms = [];
	var sock = new Socket('overview', null, $scope);

	sock.on('recentChats', function(data){
		$scope.rooms = data;
	});
}]);
