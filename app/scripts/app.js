'use strict';

angular.module('questionApp', ['btford.socket-io'])
  .constant('serverRoute', 'http://localhost:3000')
  .config(function ($routeProvider, socketProvider, serverRoute) {
    // var socket = io.connect(serverRoute);
    // socketProvider.ioSocket(mySocket);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
// config(function (socketProvider) {
//   var mySocket = io.connect('/some/other/path');
//   // do stuff with mySocket
//   socketProvider.ioSocket(mySocket);
// });