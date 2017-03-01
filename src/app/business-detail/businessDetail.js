function businessDetailController($http, $stateParams) {
  var companyName = $stateParams.company;

  $http
    .get('app/listing.json')
    .then(response => {
      this.businessDetail = response.data.companies;
      this.businessDetail.forEach(company => {
        if (company.company.toLowerCase() === companyName) {
          this.businessDetail = company;
        }
      });
    });
}

module.exports = {
  template: require('./businessDetail.html'),
  controller: businessDetailController
};
