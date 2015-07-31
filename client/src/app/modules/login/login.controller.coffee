angular.module "client"
  .controller "LoginCtrl", ($scope,Session) ->

    $scope.login =(form)->
      form.$submitted = true
      if form.$valid
        Session.create(credentials: $scope.credentials).$promise
          .then (data) ->
            console.log "zz"
          .catch (err) ->
            console.log "error"
