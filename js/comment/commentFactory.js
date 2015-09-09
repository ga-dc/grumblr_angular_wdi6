(function() {
  angular
    .module('grumblr')
    .factory('commentFactory', ['$resource', commentFactory]);

  function commentFactory($resource){
    return $resource
  }

})();
