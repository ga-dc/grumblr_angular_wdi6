(function() {
  var grumbleControllers = angular.module('grumbleControllers', ['ngRoute']);

  // index controller
  grumbleControllers.controller('grumblesController', ['Grumble', function(Grumble) {
    this.grumbles = Grumble.query();
  }]);

  // show controller (handles delete link on show page)
  grumbleControllers.controller('grumbleController', ['$routeParams','$location','$http', 'Grumble', 'Comment', function($routeParams, $location, $http, Grumble, Comment){
    var self = this;
    this.grumble = Grumble.get({id: $routeParams.id}, function(grumble){
      //comments#index
       self.grumble.comments = Comment.query({grumble_id: grumble.id});
    });
    // comments#delete
    this.deleteComment = function(commentId, index){
      Comment.delete({grumble_id: this.grumble.id, id: commentId}, function(index){
        // self.grumble.comments.splice(index + 1, 1);           // trying to trigger visual of comment being deleted without reload
      });
    };
    // comments#create
    this.createComment = function(commentData){
      this.grumble.$promise.then(function(grumble){
        Comment.save(
          {grumble_id: grumble.id }, commentData
        ).$promise.then(function(newComment){
          self.grumble.comments.push(newComment);
        });
      });
    };
    this.delete = function(id){
      Grumble.delete({id: id}, function(){
	       $location.path("/grumbles");
      });
    };
  }]);

  // new form controller (handles creation)
  grumbleControllers.controller('newGrumbleController', ["$location", 'Grumble', function($location, Grumble){
    this.create = function(){
      Grumble.save(this.grumble, function(grumble) {
        $location.path("/grumbles/" + grumble.id);
      });
    };
  }]);

  // edit form controller (handles update)
  grumbleControllers.controller('editGrumbleController', ["$location","$routeParams", 'Grumble', function($location, $routeParams, Grumble){
    this.grumble = Grumble.get({id: $routeParams.id});
    this.update = function(){
      // update defined as custom method in service, still have to pass ID to method
      this.grumble.$update({id: this.grumble.id});
      $location.path("/grumbles/" + this.grumble.id);
    };
  }]);
})();
