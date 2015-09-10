(function() {
  angular
    .module('grumblr')
    .factory('Grumble', [
      "$location",
      "$firebase",
      "Comments",
      Grumble
    ]);

  function Grumble($location, $firebase, Comments){
    var factory = this;
    var grumbles = $firebase.data;
    factory.all = grumbles;
    factory.new = instance;
    return factory;

    function instance(grumble){
      if(grumble.id) grumble.$id = grumble.id;
      var methods = {
        $create: create,
        $update: update,
        $destroy: destroy,
        comment: Comments.for(this)
      }
      return $firebase.new(grumble.$id, methods);

      function create(){
        return $firebase.create(this).then(function(response){
          grumble = response;
          $location.path("./grumbles/" + response.key());
        });
      }
      function update(){
        return $firebase.update(this).then(function(response){
          $location.path("./grumbles/" + response.key());
        });
      }
      function destroy(){
        return $firebase.destroy(this).then(function(){
          $location.path("./grumbles");
        });
      }
    }
  }
})();
