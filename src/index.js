var angular = require('angular');

require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/main');
var header = require('./app/header');
var businessList = require('./app/business-list/business-list');
var business = require('./app/business-list/business');
var businessDetail = require('./app/business-detail/businessDetail');
var footer = require('./app/footer');

require('./index.scss');

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('businessList', businessList)
  .component('business', business)
  .component('businessDetail', businessDetail)
  .component('fountainFooter', footer);
