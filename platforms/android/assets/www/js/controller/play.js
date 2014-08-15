app.controller('Play', function($scope, VideosService, $routeParams, $rootScope, $sce) {

	$scope.video = {};


	VideosService.get($routeParams['id']).then(function(video) {
		$scope.video = video;
		$scope.video.link = $sce.trustAsResourceUrl(video.link);
	}, function(msg) {
		console.log(msg);
	});

});