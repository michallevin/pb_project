'use strict';


angular.module('bpApp')
	.controller('MainCtrl', function ($scope, $http, $myService) {
		$scope.status = [];
		$scope.last_updated = [];
		$scope.messages=[];
		$scope.showSpinner1=true;
		$scope.showSpinner2=true;
		
		$scope.callback1= function() {
			$scope.status = $myService.status;
			$scope.last_updated = $myService.last_updated;
			$scope.showSpinner1=false;
		};
		
		$scope.callback2= function() {
			$scope.messages=$myService.messages;
			$scope.showSpinner2=false;
			
		};
  
		$scope.getinfo= function() {
			$scope.showSpinner1=true;
			$scope.showSpinner2=true;
			$myService.getinfo($scope.callback1,$scope.callback2);
		}
 
		$scope.getinfo();

});
 

