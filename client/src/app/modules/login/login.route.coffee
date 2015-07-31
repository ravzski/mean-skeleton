angular.module "client"
  .config ($stateProvider, $urlRouterProvider,$locationProvider) ->

    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/login')


    $stateProvider
      .state "login",
        url: "/login"
        templateUrl: "app/modules/login/login.html"
        controller: "LoginCtrl"
