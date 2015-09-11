(function(){
  var directives = angular.module('grumbleDirectives',[]);
  directives.directive('grumble', function(){
    return {
      templateUrl: "views/grumbles/_grumble.html",
      restrict: "EA"
      replace: true
    }
  });
})();


(function(){
  var directives = angular.module('grumbleDirectives',[]);
  directives.directive('grumbleForm', function(){
    return {
      templateUrl: "views/grumbles/_form.html"
      restrict:  "EA"
      replace: true
    }
  });
})();

//
// new and edit
