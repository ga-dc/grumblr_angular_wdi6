(function() {
  angular
    .module('grumbleControllers')
    .controller('grumblesController', ['grumbleFactory', grumblesController]);

  function grumblesController(Grumble){
    var self = this;
    self.grumbles = Grumble.all;
    return self;
  }
})();
