angular.module "client"
  .config ($stateProvider, $urlRouterProvider) ->
    $stateProvider
      .state "login",
        url: "/login"
        templateUrl: "app/modules/login/login.html"
        controller: "LoginCtrl"

