var app = angular.module('MyVideos', ['ngRoute']); // création d'un nouveau module et utilisation du service ngRoute
app.config(function($routeProvider) {
    $routeProvider.when('/', { // si on est à la racine, on fait appel à home.html
        templateUrl: 'include/home.html',
        controller: 'Home'
    }).when('/about', { // /about, on fait appel à about.html
        templateUrl: 'include/about.html',
        controller: 'About'
    }).when('/video/:id', { // /video/:id, on fait appel à video.html (id représente une valeur passée dans l'url qu'on peut récupérer par $routeParams)
        templateUrl: 'include/video.html',
        controller: 'Play'
    }).otherwise({ // sinon, on redirige vers la page d'accueil
        redirectTo: '/'
    });
});
$(document).ready(function() {
    document.addEventListener('deviceready', function() {
        //code cordova
        navigator.splashscreen.hide();
    }, false);
    document.addEventListener("backbutton", function() {
        window.location.href = "/";
    }, false);
    document.addEventListener('touchmove', function(e) {
        //e.preventDefault();
    }, false);
});