(function() {
  angular
    .module('grumblr')
    .factory('Grumble', [
      "$location",
      "$firebase",
      Grumble
    ]);

  function Grumble($location, $firebase){
    var factory = this;
    var grumbles = $firebase.data;
    factory.all = grumbles;
    factory.new = function(grumble){
      if(grumble.id) grumble.$id = grumble.id;
      var methods = {
        create: function(){
          return $firebase.create(this).then(function(response){
            grumble = response;
            $location.path("/grumbles/" + response.key());
          });
        },
        update: function(){
          return $firebase.update(this).then(function(response){
            $location.path("/grumbles/" + response.key());
          });
        },
        destroy: function(){
          return $firebase.destroy(this).then(function(){
            $location.path("/grumbles");
          });
        }
      }
      return $firebase.new(grumble.$id, methods);
    }

    return factory;
  }
})();
