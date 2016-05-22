var app = angular.module("DevOps",['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('main.html',{
		templateUrl: 'main.html',
		controller: 'MainController'
	});
	
}])

.controller('MainController',[function(){
	console.log('This is the MainController');

}]);
