(function(){
  var directives = angular.module('grumbleDirectives',[]);
  directives.directive('grumble', function(){
    return {
      templateUrl: "views/grumbles/_grumble.html",
      restrict: "E",
      link: function(scope, element, attributes){
        if(scope.grumbleCtrl) scope.grumble = scope.grumbleCtrl.grumble;
      }
    }
  });

  directives.directive('grumbleSave', function(){
    return {
      templateUrl: "views/grumbles/_grumble_save.html",
      restrict: "E",
      link: function(scope, element, attributes){
        scope.newGrumbleCtrl.grumble = scope.grumbleCtrl.grumble;
      }
    }
  });

})();
