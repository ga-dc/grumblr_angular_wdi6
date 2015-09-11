'use strict';

(function() {
<<<<<<< HEAD
    var app = angular.module('grumblr', [
        'ngResource',
        'ngRoute',
        'grumbleServices',
        'grumbleControllers',
        'grumbleRouter'
    ]);
=======
  angular
  .module('grumblr', [
    'ngRoute',
    'firebase',
  ])
  .config([
    '$routeProvider',
    function($routeProvider){
      $routeProvider
      .when("/grumbles", {
        templateUrl: 'views/index.html',
        controller: 'grumbleIndexController',
        controllerAs: 'vm'
      })
      .when("/grumbles/new", {
        templateUrl: 'views/save.html'
      })
      .when("/grumbles/:id", {
        templateUrl: 'views/show.html'
      })
      .when("/grumbles/:id/edit", {
        templateUrl: 'views/save.html'
      })
      .otherwise({
        redirectTo: "/grumbles"
      })
    }
  ]);
>>>>>>> 2c1a2250b0a3247f5942a2e95a8eab1aa36256e0
})()
