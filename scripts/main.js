var app = angular.module('test', ['ui.router']);
var boxesCount = 10;

app.controller('mainCtrl', function($scope, boxFactory,$interval){
	$scope.boxes = [];
	for(var i = 0; i<boxesCount;i++){
		$scope.boxes[i] = [];
		for (var j = 0; j<boxesCount; j++){
			$scope.boxes[i].push({id: [i,j], active: false, playing: false})
		}
	}
	$scope.play = function(){
			console.log(boxesCount)
			var y = 0
			var timer = $interval(function(){
				y++
				for (var x=0;x<boxesCount;x++){
					if (y===boxesCount){
						console.log("hey, listen!")
						y = 0;
					}
					console.log("y=",y)
					// console.log(y,x)
					$scope.boxes[y][x].playing = true;

					if ($scope.boxes[y-1][x]){
						$scope.boxes[y-1][x].playing = false;
					};

					
				
				}
			},200)
		}
	
	$scope.toggleActive = boxFactory.toggleActive
});

app.directive('noteBox', function(boxFactory){
	return {
		restrict: 'E',
		link: function(scope,elem,attr){
			// console.log(boxFactory)
			scope.toggleActive = boxFactory.toggleActive
		},
		templateUrl: "../templates/oneBox.html"
	}
})

app.factory('boxFactory', function(){

	return{
		toggleActive: function(){
		console.log("hey")
		if (!this.box.active){
			this.box.active = true;
			return true;
		}
		else { this.box.active = false}
		return false;
		}
	}

})