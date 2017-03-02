var angular = require('angular');
require('angular-ui-router');
var routesConfig = require('./routes');
var mainHeader = require('./app/main-header/mainHeader');
var main = require('./app/main');
var business = require('./app/business-list/business');
var businessList = require('./app/business-list/business-list');
var businessDetail = require('./app/business-detail/businessDetail');
var businessDepartments = require('./app/business-departments/businessDepartments');
var businessEmployees = require('./app/business-employees/businessEmployees');
var headerBusiness = require('./app/header-business/headerBusiness');
var mainFooter = require('./app/main-footer/mainFooter');
require('./index.scss');
require('./fonts/font-awesome/scss/font-awesome.scss');

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('mainHeader', mainHeader)
  .component('businessList', businessList)
  .component('businessDepartments', businessDepartments)
  .component('businessEmployees', businessEmployees)
  .component('business', business)
  .component('headerBusiness', headerBusiness)
  .component('businessDetail', businessDetail)
  .component('mainFooter', mainFooter);
