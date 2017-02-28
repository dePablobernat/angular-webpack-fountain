var angular = require('angular');

var business = require('./business');
var businessList = require('./business-list');

var businessListModule = 'businessList';

module.exports = businessListModule;

angular
  .module(businessListModule, [])
  .component('business', business)
  .component('business-list', businessList);
