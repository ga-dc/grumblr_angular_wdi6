(function() {
  angular
    .module('grumblr')
    .factory("Comments", [
      "$firebase",
      Comments
    ]);

  function Comments($firebase){
    var factory = this;
    factory.for = function(grumble, comment){
      if(!comment) comment = {}
      var methods = {
        $create: create,
        $destroy: destroy
      }
      return angular.extend(comment, methods);

      function create(){
        if(!grumble.comments) grumble.comments = [];
        grumble.comments.push(this);
        return $firebase.update(grumble);
      }
      function destroy(){
        grumble.comments.splice(grumble.comments.indexOf(this), 1);
        return $firebase.update(grumble);
        // grumble.child("comments").$remove(this)
      }
    }
    return factory
  }

})();
