var angular = require('angular');
require('angular-mocks');
var businessEmployees = require('./businessEmployees');

describe('businessEmployees component', function () {
  beforeEach(function () {
    angular
      .module('businessEmployees', ['app/business-employees/businessEmployees.html'])
      .component('businessEmployees', businessEmployees);
    angular.mock.module('businessEmployees');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<businessEmployees></businessEmployees>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
