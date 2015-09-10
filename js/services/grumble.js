Angular services are substitutable objects that are wired together using dependency injection
Use services or organize and to share code across your app
they are only instantiated when an application component depends on it -- must add it as a dependency thru dependency injection

// Resource expects a classic RESTful backend (get, post, put, delete http verbs)
// to use $resource in controller/service have to declare dependency on it in app.js
// then can call $resource() function with REST endpoint and the function will return a $resource class representation that can be used to interact with RESTful backend
//
// custom service that uses $resource to interact with the REST API
//serviecs are registered as module api - generally use the module factory to register a service
//You register a factory function that creates a service instance when called rather than registering a service instance
(function() {
  //(grumble object that we'll call dependencies on, [list of dependencies])
  var grumbleServices = angular.module('grumbleServices', ['ngResource']);
  //resource is like inheriting from AR:Base - gives us functionality
  grumbleServices.factory('Grumble', ['$resource', function($resource) {
    return $resource('http://grumblr.wdidc.org/grumbles/:id', {}, {
      update: {method:'PUT'}
    });
  }]);
})();
//IFFE - immediately invoked expression - defines scope so that we dont have to worry about globals
