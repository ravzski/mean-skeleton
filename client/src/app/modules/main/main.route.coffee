angular.module "client"
  .config ($stateProvider, $urlRouterProvider, $locationProvider) ->

    $locationProvider.html5Mode(true)

    $stateProvider
      .state "home",
        url: "/"
        templateUrl: "app/modules/main/main.html"
        controller: "MainCtrl"
        controllerAs: "main"

    $urlRouterProvider.otherwise '/'
