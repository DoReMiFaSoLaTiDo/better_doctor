angular.module('myApp')
  .controller('SearchCtrl', [
    '$stateParams',
    '$scope',
    'searchRepository',
    function($stateParams,$scope, searchRepository){
      $scope.name = $stateParams.name;
      searchRepository.getAllDocs($scope.name).success(function(doctors_data) {$scope.doctors = doctors_data['data']});
      
    }
  ]);
