(function() {
  var grumbleServices = angular.module('grumbleServices', ['ngResource']); // We're creating a new module and loading the dependency ngResource library

  grumbleServices.factory('Grumble', ['$resource', function($resource) { // $resource will give us RESTful routes for Grumble factory
    return $resource('http://grumblr.wdidc.org/grumbles/:id', {}, {
      update: {method:'PUT'}
    });
  }]);

  grumbleServices.factory('Comment', ['$resource', function($resource) { // $resource will give us RESTful routes for Comment factory
    return $resource('http://grumblr.wdidc.org/grumbles/:grumble_id/comments/:id', {}, { 

    });
  }]);

})();
