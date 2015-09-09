'use strict';

(function() {
  angular
  .module('grumblr', [
    'ngRoute',
    'firebase',
    'ngResource'
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
})()
