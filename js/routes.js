(function(){
  angular
    .module('grumbleRouter', [])
    .config([
      '$routeProvider',
      function($routeProvider){
        $routeProvider
        .when("/grumbles", {
          templateUrl: 'views/grumbles/index.html',
          controller: 'grumblesController',
          controllerAs: 'vm'
        })
        .when("/grumbles/new", {
          templateUrl: 'views/grumbles/edit.html',
          controller: 'newGrumbleController',
          controllerAs: 'vm'
        })
        .when("/grumbles/:id", {
          templateUrl: 'views/grumbles/show.html',
          controller: 'showGrumbleController',
          controllerAs: 'vm'
        })
        .when("/grumbles/:id/edit", {
          templateUrl: 'views/grumbles/edit.html',
          controller: 'editGrumbleController',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: "/grumbles"
        })
      }
    ])
})();