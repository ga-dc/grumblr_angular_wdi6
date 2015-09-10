(function() {
  app = angular.module('grumbleControllers',[]);

////Delete
  app.controller('grumbleController', ['$routeParams', '$location', 'Grumble', function ($routeParams, $location, Grumble) {
    this.grumble = Grumble.get({id: $routeParams.id})
    this.delete = function (id) {
      Grumble.delete({id: id}, function(){
        $location.path("/grumbles")
      })
    }
  }]);

////index
  app.controller('grumblesController', ['Grumble', function(Grumble) {
    this.grumbles = Grumble.query();
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
  app.controller('editGrumbleController', ["$location","$routeParams", 'Grumble', function($location, $routeParams, Grumble){
    this.grumble = Grumble.get({id: $routeParams.id})
    this.update = function(){
      this.grumble.$update({id: this.grumble.id});
      $location.path("/grumbles/" + this.grumble.id)
    }
  }])
//////create comment
  app.controller( 'commentsController', function(){
    this.create = function( grumble ){
      grumble.comments.unshift({
        content: grumble.newCommentContent
      });
      grumble.newCommentContent = "";
    }
  });

})();
