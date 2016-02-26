angular.module('myApp')
  .controller('DoctorCtrl', [
    '$scope',
    '$stateParams',
    'doctors',
    function($scope,$stateParams,doctors){
      $scope.doctors = doctors.doctors[$stateParams.id];
    }
  ]);
