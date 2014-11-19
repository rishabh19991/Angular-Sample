'use strict';

describe('Controller: ReportctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('ratefastappApp'));

  var ReportctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportctrlCtrl = $controller('ReportctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
