angular
  .module('myApp', [
    'ui.router',
    'templates'
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function ($stateProvider, $urlRouterProvider, $locationProvider) {
  /*
  * Routes and States
  */
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
        // function($scope, $stateParams) {
        // $scope.name = $stateParams.name;
        // }
    //   resolve: {
    //      category: ['$http','$stateParams', function($http, $stateParams) {
    //          return $http.get('/test/' + $stateParams.name)
    //                 .then(function(data) { return data.data; });
    //      }]
    //  }
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
