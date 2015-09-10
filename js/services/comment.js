(function() {
  var commentServices = angular.module('commentServices', ['ngResource']);

  commentServices.factory('Comment', ['$resource', function($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:grumble_id/comments', {}, {
      update: {method:'PUT'}
    });
  }]);
})();
