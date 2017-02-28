var angular = require('angular');
require('angular-mocks');
var businessDetail = require('./businessDetail');

describe('businessDetail component', function () {
  beforeEach(function () {
    angular
      .module('businessDetail', ['app/business-detail/businessDetail.html'])
      .component('businessDetail', businessDetail);
    angular.mock.module('businessDetail');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<businessDetail></businessDetail>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
