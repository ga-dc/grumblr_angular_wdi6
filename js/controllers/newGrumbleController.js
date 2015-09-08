(function(){
  angular
    .module('grumbleControllers')
    .controller('newGrumbleController', ["$location", 'grumbleFactory', newGrumbleController]);

  function newGrumbleController($location, Grumble){
    this.create = function(){
      var self = this
      Grumble.create(this.grumble, function(id) {
        $location.path("/grumbles/" + id);
      })
    }
  }
})();
