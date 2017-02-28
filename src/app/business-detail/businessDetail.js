function businessDetailController() {
  this.text = 'My brand new component!';
}

module.exports = {
  template: require('./businessDetail.html'),
  controller: businessDetailController
};

