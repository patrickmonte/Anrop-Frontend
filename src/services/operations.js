var angular = require('angular');

angular.module('app').factory('OperationSvc', function ($http) {
  return {
    operations: function () {
      return $http.get('/api/operations');
    },
    operation: function (id) {
      return $http.get('/api/operations/' + id);
    },
    update: function (id, data) {
      return $http.post('/api/operations/' + id, data);
    },
  };
});