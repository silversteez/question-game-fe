'use strict';

angular.module('questionApp')
  .controller('MainCtrl', function ($scope, socket) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    socket.emit('my other event', $scope.awesomeThings);

  });
