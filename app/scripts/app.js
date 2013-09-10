'use strict';

angular.module('questionApp', [])
  .constant('serverRoute', 'http://localhost:3000')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
