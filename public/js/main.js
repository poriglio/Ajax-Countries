angular.module("countriesApp",[])

angular.module("countriesApp").controller("countriesController",["$scope","$http",function($scope,$http){

	$scope.greeting = "Welcome to the World!"

	console.log("The script is running.")

	$scope.loadCountries = function(){
		$http.get("/countries",function(error,data){
			if(!error){
				console.log(data.data)
			}
			else{
				console.log("Error!!!")
			}
		})
	}

}])