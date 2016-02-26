angular.module('myApp')
.factory('searchRepository', function($http,$stateParams) {
  return {
    getAllDocs: function(q) {

      var api_key = '92f244da2fff12abd0817cc4b1aa8e96'; // Get your API key at developer.betterdoctor.com
      var resource_url = 'https://api.betterdoctor.com/2015-09-22/doctors?name=' + q +'&user_key=' + api_key;

      return $http.get(resource_url);

    }
  };
});
