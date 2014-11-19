'use strict';

angular.module('sampleApp')
  .controller('ListCtrl', function ($scope, $location) {
      debugger;

      if (!$scope.employeeList)
          $scope.employeeList = new Array;

      $scope.employeeList = [{dob: "1991-09-19",doj: "1991-09-19",email: "Testing@testing.com",location: "Testing",name: "Test"}];
$scope.addnewEmployee = function () {
    debugger;
    if ($scope.employeeList) {
        if ($scope.employeeList.length > 0) {
            $scope.employeeList.push($scope.newemployee);
            $scope.addEmployee = false;
            $scope.newemployee = '';
        }
        else {
            $scope.employeeList = new Array;
            $scope.employeeList.push($scope.newemployee);
            $scope.addEmployee = false;
            $scope.newemployee = '';
        }
    }
};

$scope.editEmployee = function (index) {
    debugger;
    $scope.addEmployee = true;
    $scope.newemployee = $scope.employeeList[index];
    $scope.employeeList.splice(index);
};

$scope.deleteEmployee = function (index) {
    debugger;
    $scope.newemployee = $scope.employeeList[index];
    $scope.employeeList.splice(index);
};

});
