module.exports = {
  template: require('./business-list.html'),
  controller: BusinessListController
};

/** @ngInject */
function BusinessListController($http) {
  var vm = this;

  $http
    .get('app/listing.json')
    .then(function (response) {
      vm.businessList = response.data;
    });
}
