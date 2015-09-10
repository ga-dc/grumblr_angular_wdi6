(function(){
  angular
    .module('grumblr')
    .directive('commentSave', [
      "Comments",
      commentSave
    ]);

  function commentSave(Comment){
    return {
      templateUrl: "js/comment/save/commentSaveView.html",
      link: function(scope, element, attributes){
        scope.comment = Comment.for(scope.grumble);
      }
    }
  }
})();
