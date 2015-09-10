'use strict';

(function() {
  //array of dependenices - appp DEPENDS on these  - do not let it run w/o these dependencies
  //dependency injection
  var app = angular.module('grumblr', [
    'ngRoute',
    //supports RESTful services via the $resource service
    //$resource is a factory that creates a resource object that lets us interact w/RESTful server-side data sources
    //Must have this dependency in order to use $resource
    'ngResource',
    'grumbleControllers',
    // connect routes
    'grumbleRouter',
    'grumbleServices'
  ]);
})()
