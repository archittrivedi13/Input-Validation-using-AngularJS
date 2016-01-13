var app = angular.module('myApp', []);
	app.controller('mainCtrl', function ($scope) {
		$scope.fullname = '';
		$scope.email = '';
		$scope.phone = '';
		$scope.change = function() {
			$scope.myVar = !$scope.myVar;
		}
	});