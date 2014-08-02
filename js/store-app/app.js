var storeApp = angular.module('storeApp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', { 
      templateUrl: 'index.html',
      controller: storeController }).
    when('/cart', {
      templateUrl: 'partials/cart.html',
      controller: storeController }).
    otherwise({
      redirectTo: '/' });
}]);
