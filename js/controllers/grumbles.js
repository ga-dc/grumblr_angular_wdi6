(function() {
  app = angular.module('grumbleControllers',[]);

  app.controller('grumbleController' ['$routeParams', 'Grumble', function ($routeParams, Grumble) {
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
      this.grumbles.unshift({
        title: this.title,
        authorName: this.authorName,
        content: this.content,
        photoUrl: this.photoUrl
      })
      this.reset()
    this.edit = function(index){
      var grumble = this.grumbles[index]
      this.title = grumble.title
      this.authorName = grumble.authorName
      this.photoUrl = grumble.photoUrl
      this.content = grumble.content
    }
    this.update = function(index){
      var grumble = this.grumbles[index]
      grumble.title = this.title
      grumble.authorName = this.authorName
      grumble.photoUrl = this.photoUrl
      grumble.content = this.content
    this.formIsVisible = false
    }
    this.showGrumble = true
    this.toggleForm = function(){
      this.formIsVisible = this.formIsVisible ? false : true
    }
  }]);


  app.controller( 'commentsController', function(){

    this.create = function( grumble ){
      grumble.comments.unshift({
        content: grumble.newCommentContent
      });
      grumble.newCommentContent = "";
    }
  });

})();
