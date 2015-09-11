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
      link: function(scope, element, attributes){
        if(!scope.grumble){
          scope.grumble = Grumble.new({id: $routeParams.id})
          scope.showButtons = true;
        }
      }
    }
  }
})();
