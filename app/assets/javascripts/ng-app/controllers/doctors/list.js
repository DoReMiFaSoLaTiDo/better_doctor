angular.module('myApp')
  .controller('ListCtrl', [
    '$scope',
    '$stateParams',
    'doctors',
    function($scope,$stateParams,doctors){
      $scope.doctors = doctors.doctors; 
    }
  ]);
