(function(){
  angular
    .module('grumbleControllers')
    .controller('grumbleController', [
      '$routeParams',
      '$location',
      '$http',
      'grumbleFactory',
      'commentFactory',
      grumbleController
    ]);

  function grumbleController($routeParams, $location, $http, Grumble, Comment){
    this.grumble = Grumble.get({id: $routeParams.id}, function(grumble){
      grumble.comments = Comment.query({grumbleId: $routeParams.id});
    });
    this.delete = function(id){
      Grumble.delete({id: id})
      $location.path("/grumbles")
    }
    this.createComment = function(comment){
      var self = this
      Comment.save({grumbleId: $routeParams.id},comment, function(comment){
        self.grumble.comments.push(comment)
        self.comment = {}
      })
    }
  }

})();
