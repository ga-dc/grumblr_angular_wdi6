(function(){
  var directives = angular.module('grumbleDirectives',[]);
  directives.directive('grumble', function(){
    return {
      templateUrl: "views/grumbles/_grumble.html",
      restrict: "EA"
    }
  });
})();

// 
// new and edit
