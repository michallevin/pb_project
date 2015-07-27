'use strict';

angular.module('bpApp')
  .factory('$myService', function ($http) {
	  
	  
	  function $myService(){
		  	this.status=[];
			this.last_updated=[];
			this.messages=[];
	  }
    
	  $myService.prototype.getinfo= function(callback1,callback2) {
					$http({
						url : "http://localhost:9000/status",
						method : "GET",
					}).success(( function(data) {
						this.status=data.status;
						this.last_updated=data.last_updated
						callback1();
					
					}).bind(this));
					$http({
						url : "http://localhost:9000/messages",
						method : "GET",
					}).success(( function(data) {
						this.messages=data;
						callback2();
					}).bind(this));
	  }
	  
	  
	  return new $myService()
	  
	  
  });
