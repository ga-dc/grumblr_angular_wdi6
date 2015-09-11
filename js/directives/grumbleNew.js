(function(){
  var directives = angular.module('grumbleDirectives',[]);
  directives.directive('grumbleNew', function(){
    return {
      templateUrl: "views/grumbles/_grumbleNew.html"
    }
  });
})();