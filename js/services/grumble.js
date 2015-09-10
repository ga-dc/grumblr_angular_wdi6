(function() {
  var grumbleServices = angular.module('grumbleServices', ['ngResource']);
  grumbleServices.factory('Grumble', ['$resource', function($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:id', {}, {
      update: {method: 'PUT'}
    });
  }]);

  grumbleServices.factory('Comment', ['$resource', function($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:grumble_id/comments/:id');
  }]);


})();

Grumble.get({id: 10})
Comment.query({grumble_id: 55})

// Grumble.update({id: 3}, {title: "Hello!", authorName: "Adam"})
//
// Grumble.get({id: 3}, function(grumble){
//   grumble.$update({title: "Howdy!"})
// })
