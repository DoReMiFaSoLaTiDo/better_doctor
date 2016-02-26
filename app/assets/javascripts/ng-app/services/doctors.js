angular.module('myApp')
.factory('doctors', [
  '$http',
  function($http){
    var api_key = '92f244da2fff12abd0817cc4b1aa8e96'; // Get your API key at developer.betterdoctor.com
    var resource_url = 'https://api.betterdoctor.com/2015-09-22/doctors?name=' + 'nguyen' +'&user_key=' + api_key;

    var o = {}
    o.getAll = function() {
    $http.jsonp(resource_url).success(function(data){
      angular.copy(data, o.doctors);
    });
  };
  return o;
}])
