(function() {
  var grumbleControllers = angular.module('grumbleControllers', ['ngRoute']);

  // index controller
  grumbleControllers.controller('grumblesController', ['Grumble', function(Grumble) {
    this.grumbles = Grumble.query();

  }]);

  // show controller (handles delete link on show page)
  grumbleControllers.controller('grumbleController', ['$routeParams','$location','$http', 'Grumble', 'Comment', function($routeParams, $location, $http, Grumble, Comment){

    var self=this;

    this.grumble = Grumble.get({id: $routeParams.id}, function(grumble){
      self.comments = Comment.query({grumble_id: grumble.id});
    });

    this.deleteComment = function(id){
    Comment.delete({grumble_id: self.grumble.id, id:id}, function(){self.comments = Comment.query({grumble_id: self.grumble.id});
  });
};
  this.createComment = function(id){
    Comment.save({grumble_id: self.grumble.id, id: id}, function(){
      self.comments= Comment.createComment({authorName: grumbleCtrl.comments.authorName, content: grumbleCtrl.comments.content});
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
