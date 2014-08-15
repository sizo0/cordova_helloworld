app.controller('Videos', function($scope, VideosService, $rootScope) {

	$scope.videos = [];

	VideosService.getAll().then(function(videos) {
		$scope.videos = videos;
	}, function(msg) {
		console.log(msg);
	});

});