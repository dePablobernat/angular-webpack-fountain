var angular = require('angular');
require('angular-mocks');
var headerBusiness = require('./headerBusiness');

describe('headerBusiness component', function () {
  beforeEach(function () {
    angular
      .module('headerBusiness', ['app/header-business/headerBusiness.html'])
      .component('headerBusiness', headerBusiness);
    angular.mock.module('headerBusiness');
  });

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<headerBusiness></headerBusiness>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
