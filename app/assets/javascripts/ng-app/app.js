angular
  .module('myApp', [
    'ui.router',
    'templates'
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function ($stateProvider, $urlRouterProvider, $locationProvider) {
  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'doctors/index.html',
      controller: 'HomeCtrl'
    })
    .state('test', {
      url: '/test',
      templateUrl: 'doctors/test.html',
      controller: 'TestCtrl'
    })
    .state('search', {
      url: '/search?name=',
      templateUrl: 'doctors/search.html',
      controller: 'SearchCtrl'

    })
    .state('doctors', {
        url: '/doctors/{id}',
        templateUrl: 'doctors/List.html',
        controller: 'ListCtrl'
      });
      // default fallback Route
      $urlRouterProvider.otherwise('/');

      //enable HTML5 mode for SEO
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }]);
