(function(){
  angular
    .module('grumblr')
    .directive('commentShow', function(){
      return {
        templateUrl: "js/comment/show/commentShowView.html",
        replace: true,
        scope: {
          comment: "="
        }
      }
    });
})();
