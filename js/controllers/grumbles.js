//controllers are go-between for views(our HTML) and our data
//instantiate a controller - this is where all logic will be contained

// $resource gives us access to get(), query(), save(), remove(), and delete()
// get() returns a single entry (need id)
// query() returns all entries (no id)
// save(), delete(), and remove() methods are also available -- but only on a resource instance  rather than the entire class


(function() {
  var grumbleControllers = angular.module('grumbleControllers', ['ngRoute']);

  // index controller
  grumbleControllers.controller('grumblesController', ['Grumble', function(Grumble) {
    //Grumble.query() is provided by service
    this.grumbles = Grumble.query();
  }]);

  // show controller (handles delete link on show page)
  grumbleControllers.controller('grumbleController', ['$routeParams','$location','$http', 'Grumble', function($routeParams, $location, $http, Grumble){
    //not sure what to do - use consol.log!
    //not sure what something is? console.log(this.grumble) to find out
    this.grumble = Grumble.get({id: $routeParams.id});
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

//when $update() function is called, triggers PUT request to url with designated id

  //edit form controller (handles update)
  grumbleControllers.controller('editGrumbleController', ["$location","$routeParams", 'Grumble', function($location, $routeParams, Grumble){
    this.grumble = Grumble.get({id: $routeParams.id});
    this.update = function(){
      // update defined as custom method in service, still have to pass ID to method
      this.grumble.$update({id: this.grumble.id});
      $location.path("/grumbles/" + this.grumble.id);
    };
  }]);
})();
