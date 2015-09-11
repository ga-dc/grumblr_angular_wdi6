'use strict';

(function() {
  var app = angular.module('grumblr', [
      // dependency injection
      //our controller
    'grumbleControllers',
    'ngRoute',
    'ngResource',
    //our API
    'grumbleServices',
    // our router
    'grumbleRouter'
  ]);
})()
