module = angular.module("Session", [])

module.factory 'Session', ($resource) ->

  Session = $resource "/api/session", null,
    login:
      method: 'POST'

    getCurrentUser:
      method: 'GET'
      isArray: false

    logout:
      method: 'DELETE'


  Session
