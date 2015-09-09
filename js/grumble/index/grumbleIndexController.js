(function() {
  angular
    .module('grumblr')
    .controller('grumbleIndexController', ['Grumble', grumbleIndexController]);

  function grumbleIndexController(Grumble){
    var vm = this;
    vm.grumbles = Grumble.all;
    return vm;
  }
})();
