angular.module('client').factory 'User', 
  ['$resource','$rootScope'
  ($resource, $rootScope) ->

    
    User = $resource "/api/users/:id", {id: '@id'}, 
      {
        update:
          method: 'PATCH'

      }

]