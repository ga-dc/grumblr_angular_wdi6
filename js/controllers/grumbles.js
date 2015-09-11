(function() {
  app = angular.module('grumbleControllers',[]);

// Index -> Grumbles Controller
  app.controller('grumblesController', ['Grumble', function(Grumble) {
    this.grumbles = Grumble.query();
  }]);

// Show -> Grumble Controller -> Show, Delete, Show Comments
  app.controller('grumbleController', ['$routeParams', '$location', 'Grumble', 'Comment', function($routeParams, $location, Grumble, Comment){
    var self = this;
    this.grumble = Grumble.get({id: $routeParams.id}, function(grumble) {
      grumble.comments = Comment.query({grumble_id: grumble.id});
    });
    // create Comment
    this.createComment = function(comment) {

      Comment.save({grumble_id: $routeParams.id}, comment, function(comment) {
        self.grumble.comments.push(comment);
        self.comment = {};
      });
    };
    // delete Comment
    this.deleteComment = function(comment, index) {
      var self = this;

      Comment.delete({grumble_id: self.grumble.id, id: comment.id}, function(index) {
        self.grumble.comments.splice(index, 1);
      })
    };
    // delete Grumble
    this.delete = function(){
      Grumble.delete(this.grumble, function() {
        $location.path('/grumbles');
      });
    };
  }]);

// New -> Grumble Controller -> Create
  app.controller('newGrumbleController', ['$location', 'Grumble', function($location, Grumble) {

    this.create = function(){
      Grumble.save(this.grumble, function(newGrumble) {
        $location.path('/grumbles/' + newGrumble.id)
      })
    };
  }]);

// Edit -> Grumble Controller -> Update
  app.controller('editGrumbleController', ['$routeParams', '$location', 'Grumble', function($routeParams, $location, Grumble) {
    var self = this;
    this.grumble = Grumble.get({id: $routeParams.id});

    this.update = function() {
      this.grumble.$update(this.grumble, function() {
        $location.path("/grumbles/" + self.grumble.id)
      });
    };
  }])
})()

//   app.controller('grumblesController', ['Grumble', function(Grumble) {
//
//     this.grumbles = Grumble.query();
//
//
//   app.controller( 'commentsController', function(){
//     this.create = function( grumble ){
//       grumble.comments.unshift({
//         content: grumble.newCommentContent
//       });
//       grumble.newCommentContent = "";
//     };
//   });
// }])
