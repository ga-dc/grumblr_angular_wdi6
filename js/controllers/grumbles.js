(function() {
  app = angular.module('grumbleControllers',[]);

  app.controller('newController',['$location', 'Grumble', function($location, Grumble){
      this.create = function(){
        Grumble.save({
            title: this.title,
            authorName: this.authorName,
            content: this.content,
            photoUrl: this.photoUrl
        }, function(newGrumble){
            $location.path("/grumbles/"+newGrumble.id)
        })
      }
  }])

  app.controller('grumbleController',['$routeParams', '$location', 'Grumble', 'Comment', function($routeParams, $location, Grumble, Comment){
    this.grumble = Grumble.get({id: $routeParams.id}, function(grumble){
        grumble.comments = Comment.query({grumble_id: grumble.id})
    })
    this.delete = function(){
        Grumble.delete(this.grumble, function(){
            $location.path("/grumbles")
        })
    }
    this.createComment = function(comment){
        var self = this;
        Comment.save({grumble_id: $routeParams.id}, comment, function(comment){
            self.grumble.comments.push(comment)
            self.comment = {}
        })
    }
  }])

  app.controller('updateController', ['$routeParams', '$location', 'Grumble', function($routeParams, $location, Grumble){
      this.grumble = Grumble.get({id: $routeParams.id})
      this.update = function(){
        //   Grumble.update({id: this.grumble.id}, this.grumble);
          this.grumble.$update(this.grumble, function(grumble){
              $location.path("/grumbles/" + grumble.id)
          });
      }
  }])

  app.controller('grumblesController', ['Grumble', function(Grumble) {
    this.grumbles = Grumble.query()
  }]);

  // app.controller( 'commentsController', function(){
  //   this.create = function( grumble ){
  //     grumble.comments.unshift({
  //       content: grumble.newCommentContent
  //     });
  //     grumble.newCommentContent = "";
  //   }
  // })
})();
