(function() {
  app = angular.module('grumbleControllers',[]);

  app.controller('grumbleController', ['$routeParams', '$location','Grumble', 'Comment', function($routeParams, $location, Grumble, Comment){
    this.grumble = Grumble.get({id: $routeParams.id}, function(grumble){
        grumble.comments = Comment.query({grumble_id: grumble.id})
    })

    this.delete = function(){
      Grumble.delete(this.grumble, function(){
        $location.path("/grumbles")
      });
    };
  }]);

  app.controller('editGrumbleController', ['$routeParams', '$location','Grumble', function($routeParams, $location, Grumble){
    var self = this;
    this.grumble = Grumble.get({id: $routeParams.id})
    this.update = function(){
      this.grumble.$update(this.grumble, function(){
        $location.path("/grumbles/" + self.grumble.id)
      })
    }
  }])

  app.controller('newGrumbleController', ['$location', 'Grumble', function($location, Grumble){
    this.create = function(){
      var self = this;
      Grumble.save({
        title: this.title,
        authorName: this.authorName,
        content: this.content,
        photoUrl: this.photoUrl
      }, function(newGrumble) {
        $location.path("/grumbles")
        // self.reset();
        // self.grumbles.unshift(newGrumble);
      });
    };
  }])

  app.controller('grumblesController', ['Grumble', function(Grumble) {

    this.grumbles = Grumble.query();

    this.reset = function(){
      this.title = "";
      this.authorName = "";
      this.content = "";
      this.photoUrl = "";
    };
    this.create = function(){
      var self = this;
      Grumble.save({
        title: this.title,
        authorName: this.authorName,
        content: this.content,
        photoUrl: this.photoUrl
      }, function(newGrumble) {
        self.reset();
        self.grumbles.unshift(newGrumble);
      });
    };
    this.edit = function(index){
      var grumble = this.grumbles[index];
      this.title = grumble.title;
      this.authorName = grumble.authorName;
      this.photoUrl = grumble.photoUrl;
      this.content = grumble.content;
    };
    this.update = function(index){
      var grumble = this.grumbles[index];
      grumble.title = this.title;
      grumble.authorName = this.authorName;
      grumble.photoUrl = this.photoUrl;
      grumble.content = this.content;
    };
    this.formIsVisible = false;
    this.showGrumble = true;
    this.toggleForm = function(){
      this.formIsVisible = this.formIsVisible ? false : true;
    };
  }]);

  app.controller( 'commentsController', function(){
    this.create = function( grumble ){
      grumble.comments.unshift({
        content: grumble.newCommentContent
      });
      grumble.newCommentContent = "";
    };
  });
})();
