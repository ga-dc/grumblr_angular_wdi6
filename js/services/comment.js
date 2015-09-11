(function() {
  var commentServices = angular.module('commentServices', ['ngResource']);

  commentServices.factory('comment', ['$resource', function($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:id/comments/:id', {}, {
      update: {method:'PUT'}
    });
  }]);
})();
