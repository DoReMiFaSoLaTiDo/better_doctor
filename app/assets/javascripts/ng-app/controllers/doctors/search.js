angular.module('myApp')
  .controller('SearchCtrl', [
    '$stateParams',
    '$scope',
    'searchRepository',
    function($stateParams,$scope, searchRepository){
      $scope.name = $stateParams.name;
      //$scope.doctors = docRepository.getAllDocs();
      searchRepository.getAllDocs($scope.name).success(function(doctors_data) {$scope.doctors = doctors_data['data']});
      //$scope.doctors = docs.doctors[$stateParams.id];
    }
  ]);
