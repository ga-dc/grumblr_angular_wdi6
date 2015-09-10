(function() {
  app = angular.module('grumbleControllers',[]);

////Delete
  app.controller('grumbleController', ['$routeParams', 'Grumble', function ($routeParams, Grumble) {
    this.grumble = Grumble.get({id: $routeParams.id})
    console.log("here", this)
    this.delete = function () {
      console.log("delete happened");
      console.log("grumble", this.grumble)
      Grumble.remove({id: this.grumble.id}, function () {
        $location.path("/grumbles")
      });
    };
  }]);


  app.controller('grumblesController', ['Grumble', function(Grumble) {
    this.grumbles = Grumble.query()
    this.reset = function(){

      this.title = ""
      this.authorName = ""
      this.content = ""
      this.photoUrl = ""
    }
    this.create = function(){
      var grumble = {
        title: this.title,
        authorName: this.authorName,
        content: this.content,
        photoUrl: this.photoUrl
      }
      Grumble.save(grumble)
      self.grumbles = Grumble.query()
      self.reset()
    }
    var self = this
    this.delete = function(id){
      Grumble.delete({id: id}, function () {
        self.grumbles = Grumble.query()
      })
    }


    this.showGrumble = true
    this.toggleForm = function(){
      this.formIsVisible = this.formIsVisible ? false : true
    }
  }]);
    //////New
  app.controller('newGrumbleController', ['Grumble', '$location', function (Grumble, $location) {
    this.create = function () {
      Grumble.save(this.grumble, function (grumble) {
        $location.path("/grumbles/" + grumble.id)
      })
    }
  }])
//////edit
  app.controller('editGrumbleController', ["$location", "$routeParams", 'Grumble', function ($location, $routeParams, Grumble) {
    this.grumble = Grumble.get({id: $routeParams.id})
    this.update = function () {
      this.grumble.$update({id: this.grumble.id});
      $location.path("/grumbles/" + this.grumble.id)
    }
  }])

  app.controller( 'commentsController', function(){

    this.create = function( grumble ){
      grumble.comments.unshift({
        content: grumble.newCommentContent
      });
      grumble.newCommentContent = "";
    }
  });

})();
