(function(){
  var directives = angular.module('grumbleDirectives',[]);
  directives.directive('grumble', function(){
    return {
      templateUrl: "views/grumbles/_grumble.html"
    }
  });
  directives.directive('grumbleShow', function(){
    return {
      templateUrl: "views/grumbles/_grumble_show.html"
    }
  });
  directives.directive('grumbleSave', function(){
    return {
      templateUrl: "views/grumbles/_grumble_save.html",
      restrict: "E",
      replace: true,
      link: function(scope, element, attributes){

      }
    }
  });
})();
