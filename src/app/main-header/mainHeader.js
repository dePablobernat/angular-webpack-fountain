module.exports = {
  template: require('./mainHeader.html'),
  controller: mainHeaderController
};

function mainHeaderController($document) {
  var toggleMenu = angular.element($document[0].querySelector('.menu-toggle'));
  var container = angular.element($document[0].querySelector('.container'));

  toggleMenu.on('click', function () {
    console.dir(container[0].classList.toggle('is-open'));
  });
}
