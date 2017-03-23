var app=angular.module('factApp',[]);
app.controller('fibCtrl',function($scope){
	$scope.factorial=function(num){
		 $scope.fact=1
		for (var i=1;i<=$scope.num;i++){
			$scope.fact=$scope.fact*i;
			// $scope.result.push(fact)
			console.log("result",$scope.fact)

	    }
    }

});