(function(){
  angular
    .module('grumblr')
    .factory('$firebase', ['$firebaseObject', '$firebaseArray', $firebase]);

  function $firebase($firebaseObject, $firebaseArray){
    var connection = new Firebase('https://amber-torch-5834.firebaseio.com/');
    var data = $firebaseArray(connection);
    return {
      data: data,
      new: function(id, methods){
        var obj = $firebaseObject.$extend(methods);
        if(id) return new obj(connection.child(id));
        else return new obj(connection);
      },
      create: function(object){
        return data.$add(object);
      },
      update: function(object){
        return object.$save();
      },
      destroy: function(object){
        return object.$remove();
      }
    }
  }
})();
