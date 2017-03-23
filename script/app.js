var app=angular.module('factApp',[]);
app.controller('fibCtrl',function($scope){
	$scope.factorial=function(num){
		var fact=1
		for (var i=0;i<=$scope.num;i++)
			console.log("an",fact)
			fact=fact*i

	}

});