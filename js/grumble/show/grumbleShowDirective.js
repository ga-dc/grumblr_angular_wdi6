(function(){
  angular
    .module('grumblr')
    .directive('grumbleShow', [
      "$routeParams",
      "Grumble",
      grumbleShow
    ]);

  function grumbleShow($routeParams, Grumble){
    return {
      templateUrl: "js/grumble/show/grumbleShowView.html",
      restrict: "E",
      replace: true,
      link: function(scope, element, attributes){
        if(!scope.grumble){
          scope.grumble = Grumble.new({id: $routeParams.id})
          scope.showButtons = true;
        }
      }
    }
  }
})();
