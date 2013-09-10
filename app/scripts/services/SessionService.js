'use strict';

angular.module('questionApp')
  .factory('SessionService', function (serverRoute, $http) {
    // Service logic
    // ...



    // Public API here
    return {
      signup: function(username, password) {
        $http({
          method: 'POST',
          url: serverRoute + '/signup',
          data: JSON.stringify({
            username: username,
            password: password
          })
        })
        .success(function() {
          console.log('success signup post');
        })
        .error(function(data, status) {
          console.log('error signup post: ', status);
        });
      },

      login: function() {

      }
    };
  });
