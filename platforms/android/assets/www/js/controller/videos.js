app.controller('Videos', function($scope, VideosService, $rootScope, $location) {

	$scope.videos = [];

	VideosService.getAll().then(function(videos) {
		$scope.videos = videos;
	}, function(msg) {
		console.log(msg);
	});

	$scope.goTo = function(url) {
		$location.url(url);
	}

});