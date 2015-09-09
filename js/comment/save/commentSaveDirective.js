(function(){
  angular
    .module('grumblr')
    .directive('commentSave', function(){
      return {
        templateUrl: "js/comment/save/commentSaveView.html",
        replace: true,
        scope: {
          grumble: "="
        }
      }
    });
})();
