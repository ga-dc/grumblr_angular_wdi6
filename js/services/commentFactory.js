(function() {
  angular
    .module('grumbleServices')
    .factory('commentFactory', ['$resource', commentFactory]);

  function commentFactory($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:grumbleId/comments/:id', {}, {
      update: {method:'PUT'}
    });
  }
})();
