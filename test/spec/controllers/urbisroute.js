'use strict';

describe('Controller: UrbisrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('urbiswebuiApp'));

  var UrbisrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UrbisrouteCtrl = $controller('UrbisrouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UrbisrouteCtrl.awesomeThings.length).toBe(3);
  });
});
