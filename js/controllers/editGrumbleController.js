(function(){
angular
  .module('grumbleControllers')
  .controller('editGrumbleController', [
    "$location",
    "$routeParams",
    'grumbleFactory',
    editGrumbleController
  ]);


  function editGrumbleController($location, $routeParams, Grumble){
    this.grumble = Grumble.get({id: $routeParams.id})
    this.update = function(){
      this.grumble.$save();
      $location.path("/grumbles/" + this.grumble.$id)
    }
  }
})();
