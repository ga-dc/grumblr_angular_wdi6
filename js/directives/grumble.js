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

  directives.directive('newGrumble', ['Grumble', '$routeParams', '$location', function(Grumble, $routeParams, $location){
    return {
      templateUrl: "views/grumbles/_newGrumble.html",
      link: function(scope, element, attributes){
        if($routeParams.id){
          scope.editing = true;
          scope.grumble = Grumble.get({id: $routeParams.id});
        }
        scope.update = function(){
          scope.grumble.$update({id: scope.grumble.id});
          $location.path("/grumbles/" + this.grumble.id)
        }
        scope.create = function(){
          Grumble.save(scope.grumble, function(grumble) {
            $location.path("/grumbles/" + grumble.id);
          })
        }
      }
    }
  }]);
})();
