
angular.module('buttonsDemo1', ['ngMaterial'])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  })
.controller('AppCtrl', function($scope, $timeout, $mdTheming) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;

  $scope.googleUrl = 'http://google.com';

  $scope.elad = $timeout(function () {
    return $mdTheming.defineTheme('elad', {
      primary: 'purple'
    }).name;
  }, 4000)

  $scope.sheker = () => {
    console.log('sheker')
    return 'docs-dark'
  };

  $scope.try = true;

  $timeout(() => {
    $scope.try = false;
  }, 7000)
});
