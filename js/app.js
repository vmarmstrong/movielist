(function(){
	'use strict';
	angular.module('MovieList', [])
	
	.controller('MovieListController', function($scope, $http) {
		var mlist = this;
		mlist.movies = [];
		$http.get('js/movies.json').then(function(res){
			mlist.movies = res.data;
		});
	})
	
	.directive('movieGenres', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/movie-genres.html'
		}
	})
	
	.directive('moviePoster', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/movie-poster.html',
			replace: true
		}
	});
	
	
	
})();
