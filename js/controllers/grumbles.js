(function() {
  var grumbleControllers = angular.module('grumbleControllers', ['ngRoute'])

  grumbleControllers.controller('grumblesController', ['Grumble', function(Grumble) {
    this.grumbles = Grumble.query();
  }]);

  grumbleControllers.controller('grumbleController', ['$routeParams','$location','$http', 'Grumble','Comment', function($routeParams, $location, $http, Grumble, Comment){
    this.grumble = Grumble.get({id: $routeParams.id}, function(grumble){
      grumble.comments = Comment.query({grumbleId: $routeParams.id});
    });

    this.delete = function(id){
      Grumble.delete({id: id}, function(){
        $location.path("/grumbles")
      });
    }
  }]);

  grumbleControllers.controller('newGrumbleController', ["$location", 'Grumble', function($location, Grumble){
    this.create = function(){
      Grumble.save(this.grumble, function(grumble) {
        $location.path("/grumbles/" + grumble.id);
      })
    }
  }])

  grumbleControllers.controller('editGrumbleController', ["$location","$routeParams", 'Grumble', function($location, $routeParams, Grumble){
    this.grumble = Grumble.get({id: $routeParams.id})
    this.update = function(){
      this.grumble.$update({id: this.grumble.id});
      $location.path("/grumbles/" + this.grumble.id)
    }
  }])
})();