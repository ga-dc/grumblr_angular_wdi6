(function(){
  var commentServices = angular.module('commentServices', ["ngResource"]);
  commentServices.factory('Comments', ['$resource', function($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:id/comments/', {id: '@id'});
  }]);
})();
