var angular = require('angular');
require('angular-ui-router');
var routesConfig = require('./routes');

var header = require('./app/header');
var main = require('./app/main');
var business = require('./app/business-list/business');
var businessList = require('./app/business-list/business-list');
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
