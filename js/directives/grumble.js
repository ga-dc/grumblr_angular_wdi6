(function(){
  var directives =
  angular.module('grumbleDirectives',[]);
  directives.directive('grumble', function(){
    return {
    templateUrl: 'views/grumbles/_grumble.html',
    restrict: "E",
    link: function(scope, element, attributes){
      scope.grumble = scope.grumbleCtrl.grumble;
    }
  };
  });

  directives.directive('grumbleSave', function(){
    return {
    templateUrl: 'views/grumbles/_grumbleSave.html',
    restrict: "E"
  };
});

})();
