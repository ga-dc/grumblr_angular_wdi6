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

  app.controller('grumbleController',['$routeParams', '$location', 'Grumble', function($routeParams, $location, Grumble){
    this.grumble = Grumble.get({id: $routeParams.id})
    this.delete = function(){
        Grumble.delete(this.grumble, function(){
            $location.path("/grumbles")
        })
    }

    // fetch Grumble comments here, in this controller


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

  app.controller( 'commentsController', function(){
    this.create = function( grumble ){
      grumble.comments.unshift({
        content: grumble.newCommentContent
      });
      grumble.newCommentContent = "";
    }
  })
})();
