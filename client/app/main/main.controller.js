'use strict';

angular.module('bpApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.status = [];
    $scope.last_updated = [];
    $scope.messages=[];
    $scope.showSpinner1=true;
    $scope.showSpinner2=true;
    
    $scope.getinfo= function() {
    	$scope.showSpinner1=true;
    	$scope.showSpinner2=true;
		$http({
			url : "http://localhost:9000/status",
			method : "GET",
		}).success( function(data) {
			$scope.status = data.status;
			$scope.last_updated = data.last_updated;
			$scope.showSpinner1=false;
		})
		$http({
			url : "http://localhost:9000/messages",
			method : "GET",
		}).success( function(data) {
			$scope.messages=data;
			$scope.showSpinner2=false;
		})
    	
    }

    $scope.getinfo();

  });


