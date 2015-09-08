(function(){
  angular
    .module('grumbleDirectives')
    .directive('grumble', function(){
      return {
        templateUrl: "views/grumbles/_grumble.html"
      }
    });
})();
