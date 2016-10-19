angular.module('operations').controller('OperationCtrl', function ($scope, OperationSvc) {
  var loadOperation = function () {
    OperationSvc.operation($scope.operationId).success(function (operation) {
      operation.start = new Date(operation.start);
      $scope.operation = operation;
    });
  };

  loadOperation();
});
