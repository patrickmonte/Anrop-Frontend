var angular = require('angular');

angular.module('app').controller('PwsCtrl', function ($scope, $uibModal, operationId, PwsSvc) {
  $scope.form = {};

  $scope.add = function (data) {
    var found = $scope.addons.filter(function (addon) {
      return addon.name == data.name;
    });

    if (found.length === 0) {
      return PwsSvc.add(operationId, data).success(function () {
        loadAddons();
        $scope.form = {};
        return this;
      });
    }
  };

  $scope.delete = function (addon) {
    PwsSvc.delete(operationId, addon.id).success(function () {
      loadAddons();
      return this;
    });
  };

  $scope.submit = function () {
    $scope.add($scope.form);
  };

  $scope.search = function () {
    $uibModal.open({
      template: require('../templates/pws_search.html'),
      controller: 'PwsSearchCtrl',
      scope: $scope,
    }).result.then(function () {
      loadAddons();
    }, function () {

    });
  };

  $scope.templates = function () {
    $uibModal.open({
      template: require('../templates/pws_templates.html'),
      controller: 'PwsTemplatesCtrl',
      scope: $scope,
    }).result.then(function () {
      loadAddons();
    }, function () {

    });
  };

  var loadAddons = function () {
    PwsSvc.addons(operationId).success(function (addons) {
      $scope.addons = addons;
    });
  };

  loadAddons();
});