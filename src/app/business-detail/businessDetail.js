function businessDetailController($http, $stateParams) {
  var vm = this;
  self.id = $stateParams.id;

  $http
    .get('app/listing.json')
    .then(function (response) {
      vm.businessList = response.data.companies;
      vm.businessList.forEach(company => {
        if (company.id === 1) {
          console.log(company);
          return company;
        }
      });
    });
}

module.exports = {
  template: require('./businessDetail.html'),
  controller: businessDetailController
};
