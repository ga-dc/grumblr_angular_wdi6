(function() {
  var grumbleControllers = angular.module('grumbleControllers', ['ngRoute']);

  // index controller
  grumbleControllers.controller('grumblesController', ['Grumble', function(Grumble) {
    this.grumbles = Grumble.query();
  }]);

  // show controller (handles delete link on show page)
  grumbleControllers.controller('grumbleController', ['$routeParams','$location','$http', 'Grumble', 'Comment', function($routeParams, $location, $http, Grumble, Comment){

    this.grumble = Grumble.get({id: $routeParams.id}, function(grumble){ // We can call this id because we said it had one in our route.js .when route path., then pass in the grumble as an argument so we can query the comments on that grumble_id
          grumble.comments = Comment.query({grumble_id: $routeParams.id});
    });

    // create comment method (handles create on show page)
    this.createComment = function(comment){
      console.log(comment)
      console.log("click is working")

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
  }])

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
