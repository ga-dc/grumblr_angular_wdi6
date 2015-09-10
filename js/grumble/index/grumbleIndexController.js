(function() {
  angular
    .module('grumblr')
    .controller('grumbleIndexController', ['Grumble', grumbleIndexController]);

  function grumbleIndexController(Grumble){
    this.grumbles = Grumble.all;
  }
})();
