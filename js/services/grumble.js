(function() {
  var grumbleServices = angular.module('grumbleServices', ['ngResource', 'firebase']);

  // Check connection (optional, mostly for instructional purposes)
  var firebaseUrl = "https://ga-dc-wdi-grumblr.firebaseio.com";
  var connectedRef = new Firebase(firebaseUrl + "/.info/connected");
  connectedRef.on("value", function(snapshot) {
    if (snapshot.val() === true) {
      console.log("Connected to firebase:", firebaseUrl );
    } else {
      console.log("Not connected to firebase:", firebaseUrl);
    }
  });

  // grumbles namespace on Firebase
  grumbleServices.factory('Grumble', ['$firebaseObject', '$firebaseArray', grumbleFirebase]);

  // Manages resources in firebase
  // mirrors ngResource interface
  function grumbleFirebase($firebaseObject, $firebaseArray) {
    // mirrors ngResource interface

    var grumblesRef = new Firebase(firebaseUrl + "/grumbles");

    // retrieve our grumbles
    var grumbles = $firebaseArray(grumblesRef);

    // mirror ngResource interface
    var Grumble = {
      query: function(){ return grumbles; },
      save: function( grumble, callback ){
        // persist our grumble
        grumbles.$add(grumble).then(function(ref) {
          // WORKAROUND: this is the original Grumbler, with it's new id.
          // TODO: just pass the id/key
          grumble.$id = ref.key();
          // and pass the saved grumble back
          callback(grumble);
        });
      },
      get: function (grumble, callback) {
        var found = grumbles.$getRecord(grumble.$id);
        // support optional callback
        if(typeof callback == "function") {
          callback(found);
        }
        return found;
      },
      delete: function(grumble, cb){
        return grumbles.$remove(grumbles.$getRecord(grumble.$id));
      }
    };
    return Grumble;
  }

  grumbleServices.factory('Comment', ['$resource', function($resource) {
    // return $resource('http://grumblr.wdidc.org/grumbles/:grumbleId/comments/:id', {}, {
    //   update: {method:'PUT'}
    // });
    // TODO: replace mock COmment Resource with Firebase
    return {
      query: function() {
        mockComment = { authorName: 'REPLACE ME', created_at: '01/01/77', content: "Please replace me?" };
        return mockComment;
      }
    };
  }]);
})();
