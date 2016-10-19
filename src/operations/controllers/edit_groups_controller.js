angular.module('operations').controller('EditGroupsCtrl', function ($scope, GroupsSvc) {
  $scope.form = {
    name: "",
  };

  $scope.addGroup = function () {
    GroupsSvc.add($scope.operationId, $scope.form).success(function (group) {
      $scope.groups.push(group);
      $scope.name = "";
    });
  };

  $scope.copyGroup = function (group) {
    GroupsSvc.copy($scope.operationId, group.id).success(function (group) {
      $scope.groups.push(group);
    });
  };

  $scope.deleteGroup = function (group) {
    GroupsSvc.delete($scope.operationId, group.id).success(function () {
      var index = $scope.groups.indexOf(group);
      $scope.groups.splice(index, 1);
    });
  };

  $scope.updateGroup = function (group) {
    GroupsSvc.update($scope.operationId, group.id, group).success(function () {

    });
  };

  $scope.groupsSortableOptions = {
    stop: function(e, ui) {
      var positions = $scope.groups.map(function(group, index){
        return {
          id: group.id,
          index: index,
        };
      });
      GroupsSvc.order($scope.operationId, positions).success(function () {
      });
    }
  };

  var loadGroups = function () {
    GroupsSvc.groups($scope.operationId).success(function (groups) {
      $scope.groups = groups;
    });
  };

  loadGroups();
});
