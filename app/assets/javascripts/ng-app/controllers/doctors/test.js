angular.module('myApp')
  .controller('TestCtrl', [
    '$scope',
    'docRepository',
    function($scope, docRepository){
      docRepository.getAllDocs($scope.name).success(function(doctors_data) {$scope.doctors = doctors_data['data']});

    }
  ]);
