'use strict';

(function() {
  angular.module('grumbleControllers', [
    'ngRoute'
  ]);

  angular.module('grumbleDirectives', [

  ]);

  angular.module('grumbleServices', [
    'ngResource'
  ]);

  angular.module('grumblr', [
    'ngRoute',
    'firebase',
    'ngResource',
    'grumbleControllers',
    'grumbleRouter',
    'grumbleServices',
    'grumbleDirectives'
  ]);
})()
