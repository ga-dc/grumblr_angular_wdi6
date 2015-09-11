'use strict';

//immediately invoked function expression to instantiate our angular application
//first argument is name of angular module
//second argument is an array of dependencies
//immediately invoke the function in order to start the app and prevent pollution of global variables
(function() {
  var app = angular.module('grumblr', [
    'grumbleControllers'
  ]);
})()
