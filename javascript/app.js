var app = angular.module("DevOps",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/main',{
		templateUrl: 'main.html',
		controller: 'MainController'
	});
	
}])

.controller('MainController',[function(){
	console.log('This is the MainController');

}]);
