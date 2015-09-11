(function() {
  var commentServices = angular.module('commentServices', ['ngResource']);

  commentServices.factory('Comment', ['$resource', function($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:id', {}, {
      update: {method:'PUT'}
    });
  }]);
})();
