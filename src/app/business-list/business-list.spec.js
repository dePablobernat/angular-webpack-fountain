var angular = require('angular');
require('angular-mocks');
var techs = require('./business-list');

var techsJson = [
  {
    key: 'gulp',
    title: 'Gulp',
    logo: 'http://fountainjs.io/assets/imgs/gulp.png',
    text1: 'The streaming build system',
    text2: 'Automate and enhance your workflow'
  },
  {
    key: 'react',
    title: 'React',
    logo: 'http://fountainjs.io/assets/imgs/react.png',
    text1: 'A JavaScript library for building user interfaces',
    text2: 'A declarative, efficient, and flexible JavaScript library for building user interfaces'
  },
  {
    key: 'angular1',
    title: 'Angular 1',
    logo: 'http://fountainjs.io/assets/imgs/angular1.png',
    text1: 'HTML enhanced for web apps!',
    text2: 'AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.'
  }
];

describe('techs component', function () {
  beforeEach(function () {
    angular
      .module('fountainTechs', ['app/business/business-list.html'])
      .component('fountainTechs', techs);
    angular.mock.module('fountainTechs');
  });
  it('should render 3 elements <business>', angular.mock.inject(function ($rootScope, $compile, $httpBackend) {
    $httpBackend.when('GET', 'app/business/businessList.json').respond(techsJson);
    var element = $compile('<business-list></business-list>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    var techs = element.find('business');
    expect(techs.length).toEqual(3);
  }));
});
