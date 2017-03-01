var angular = require('angular');
require('angular-ui-router');
var routesConfig = require('./routes');
var header = require('./app/header');
var main = require('./app/main');
var business = require('./app/business-list/business');
var businessList = require('./app/business-list/business-list');
var businessDetail = require('./app/business-detail/businessDetail');
var businessDepartments = require('./app/business-departments/businessDepartments');
var businessEmployees = require('./app/business-employees/businessEmployees');
var headerBusiness = require('./app/header-business/headerBusiness');
var footer = require('./app/footer');
require('./index.scss');
require('./fonts/font-awesome/scss/font-awesome.scss');

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('businessList', businessList)
  .component('businessDepartments', businessDepartments)
  .component('businessEmployees', businessEmployees)
  .component('business', business)
  .component('headerBusiness', headerBusiness)
  .component('businessDetail', businessDetail)
  .component('fountainFooter', footer);
