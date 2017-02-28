function businessDetailController($http, $stateParams) {
  var vm = this;
  self.id = $stateParams.id;

  $http
    .get('app/listing.json')
    .then(function (response) {
      vm.businessDetail = response.data.companies;
      vm.businessDetail.forEach(company => {
        if (company.id === 1) {
          console.log(company);
          vm.businessDetail = company;
        }
      });
    });
}

module.exports = {
  template: require('./businessDetail.html'),
  controller: businessDetailController
};
