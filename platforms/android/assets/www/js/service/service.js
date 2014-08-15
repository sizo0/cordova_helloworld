app.service('VideosService', function($http, $q) {

	var self = this;

	self.videos = false;

	this.getAll = function() {
		var deferred = $q.defer();
		if (self.videos !== false) {
			deferred.resolve(self.videos);
		}
		else {
			$http.get('json/videos.json')
				 .success(function(data, status) {
				 	self.videos = data;
				 	deferred.resolve(data);
				 })
				 .error(function(data, status) {
				 	deferred.reject('Impossible de récupérer les vidéos');
				 });
		}
		return deferred.promise;
	}

	this.get = function(id) {
		var deferred = $q.defer();
		var videos = self.getAll().then(function(videos) {
			angular.forEach(videos, function(video) {
				if (video.id == id) {
					deferred.resolve(video);
				}
			});
		}, function(msg) {
			deferred.reject(msg);
		})
		return deferred.promise;
	}

});