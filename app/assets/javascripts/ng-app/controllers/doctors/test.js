angular.module('myApp')
  .controller('TestCtrl', [
    '$scope',
    'docRepository',
    function($scope, docRepository){
      // $scope.name = $stateParams.name;
      //$scope.doctors = docRepository.getAllDocs();
      docRepository.getAllDocs($scope.name).success(function(doctors_data) {$scope.doctors = doctors_data['data']});
      //$scope.doctors = docs.doctors[$stateParams.id];
    }
  ]);
