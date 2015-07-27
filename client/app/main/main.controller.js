'use strict';

angular.module('bpApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.status = [];
    $scope.last_updated = [];
    $scope.messages=[];
    $scope.showSpinner=true;
    
    $scope.getinfo= function() {
    	$scope.showSpinner=true;	
		$http({
			url : "http://localhost:9000/status",
			method : "GET",
		}).success( function(data) {
				$scope.status = data.status;
				$scope.last_updated = data.last_updated;
				$http({
					url : "http://localhost:9000/messages",
					method : "GET",
				}).success( function(data) {
					$scope.messages=data;
					$scope.showSpinner=false;
				})
		})
    	
    }

    $scope.getinfo();

  });
