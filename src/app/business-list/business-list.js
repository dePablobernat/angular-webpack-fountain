module.exports = {
  template: require('./business-list.html'),
  controller: BusinessListController
};

/** @ngInject */
function BusinessListController($http) {
  $http
    .get('app/listing.json')
    .then(response => {
      this.businessList = response.data;
    });
}
