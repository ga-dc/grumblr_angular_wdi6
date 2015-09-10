(function(){
  var directives = angular.module('grumbleDirectives',[]);
  directives.directive('grumble', function(){
    return {
      templateUrl: "views/grumbles/_grumble.html"
    }
  });
  directives.directive('grumble', function(){
    return {
      templateUrl: "views/grumbles/_grumble_save.html"
    }
  });
})();
