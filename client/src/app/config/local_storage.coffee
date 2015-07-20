angular.module('client').config [
  'localStorageServiceProvider'
  (localStorageServiceProvider) ->
    localStorageServiceProvider.setPrefix('client')
    .setStorageType('localStorage')
    .setNotify(true, true)

  ]
