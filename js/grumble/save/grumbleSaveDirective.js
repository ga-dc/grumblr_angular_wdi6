(function(){
  angular
    .module('grumblr')
    .directive('grumbleSave', [
      "$routeParams",
      "Grumble",
      grumbleSave
    ]);

  function grumbleSave($routeParams, Grumble){
    return {
      templateUrl: "js/grumble/save/grumbleSaveView.html",
      restrict: "E",
      replace: true,
      link: function(scope, element, attributes){
        scope.grumble = Grumble.new({id: $routeParams.id});
      }
    }
  }
})();
