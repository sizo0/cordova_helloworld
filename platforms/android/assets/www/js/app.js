function onLoad () {
	document.addEventListener('deviceready', function() {
		//code cordova
		navigator.splashscreen.hide();
	}, false);
}


var app = angular.module('MyVideos', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {templateUrl:'include/home.html', controller:'Videos'})
		.when('/about', {templateUrl:'include/about.html', controller:'Videos'})
		.when('/video/:id', {templateUrl:'include/video.html', controller:'Play'})
		.otherwise({redirectTo:'/'});
});