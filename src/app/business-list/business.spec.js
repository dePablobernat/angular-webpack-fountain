var angular = require('angular');
require('angular-mocks');
var tech = require('./business');

describe('business component', function () {
  beforeEach(function () {
    angular
      .module('fountainTech', ['app/business/business.html'])
      .component('fountainTech', tech);
    angular.mock.module('fountainTech');
  });

  it('should render Gulp', angular.mock.inject(function ($rootScope, $compile) {
    var $scope = $rootScope.$new();
    $scope.fixture = {
      key: 'gulp',
      title: 'Gulp',
      logo: 'http://fountainjs.io/assets/imgs/gulp.png',
      text1: 'The streaming build system',
      text2: 'Automate and enhance your workflow'
    };
    var element = $compile('<business business="fixture"></business>')($scope);
    $scope.$digest();
    var tech = element.find('h3');
    expect(tech.html().trim()).toEqual('Gulp');
  }));
});
