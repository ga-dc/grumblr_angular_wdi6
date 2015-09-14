(function(){
  var directives = angular.module('grumbleDirectives',[]);
  directives.directive('grumble', ['Grumble', 'Comment', '$routeParams', '$location', function(Grumble, Comment, $routeParams, $location){
    return {
      templateUrl: "views/grumbles/_grumble.html",
      link: function(scope, element, attributes){
        if($routeParams.id){
          scope.showing = true;
          scope.grumble = Grumble.get({id: $routeParams.id});
          scope.comments = Comment.query({grumbleId: $routeParams.id});
          scope.comment = {}
        }

        scope.delete = function(id){
          Grumble.delete({id: id}, function(){
            $location.path("/grumbles")
          });
        }
        scope.createComment = function(comment){
          var self = this
          Comment.save({grumbleId: $routeParams.id}, comment, function(comment){
            scope.comments.push(comment)
            scope.comment = {}
          })
        }
      }
    }
  }]);

  directives.directive('grumbleSave', ['Grumble', '$routeParams', '$location', function(Grumble, $routeParams, $location){
    return {
      templateUrl: "views/grumbles/_grumble_save.html",
      link: function(scope, element, attributes){
        if($routeParams.id){
          scope.editing = true;
          scope.grumble = Grumble.get({id: $routeParams.id});
        }
        scope.update = function(){
          scope.grumble.$update({id: scope.grumble.id}).then(function(){
            $location.path("/grumbles/" + this.grumble.id)
          });
        }
        scope.create = function(){
          Grumble.save(scope.grumble, function(grumble) {
            $location.path("/grumbles/" + grumble.id);
          })
        }
      }
    }
  }]);
})();
