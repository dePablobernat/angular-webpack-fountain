var angular = require('angular');
require('angular-mocks');
var businessDepartments = require('./businessDepartments');

describe('businessDepartments component', function () {
  beforeEach(function () {
    angular
      .module('businessDepartments', ['app/business-departments/businessDepartments.html'])
      .component('businessDepartments', businessDepartments);
    angular.mock.module('businessDepartments');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<businessDepartments></businessDepartments>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
