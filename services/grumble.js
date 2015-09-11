// imediatly invoced function; preserves name space
(function(){
    var grumbleServices = angular.module("grumbleServices", [])
    grumbleServices.factory('Grumble', ['$resource', function($resource){
        return $resource("http://grumblr.wdidc.org/grumbles/:id.json")
    }])
})()
