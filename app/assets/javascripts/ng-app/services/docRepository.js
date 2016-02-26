angular.module('myApp')
.factory('docRepository', function($http,$stateParams) {
  return {
    getAllDocs: function() {

      var api_key = '92f244da2fff12abd0817cc4b1aa8e96'; // Get your API key at developer.betterdoctor.com
      var resource_url = 'https://api.betterdoctor.com/2015-09-22/doctors?name=' + 'nguyen' +'&user_key=' + api_key;

      return $http.get(resource_url);
      // return [
      //   { firstName: 'Jane', lastName: 'Doe', rating: 29 },
      //   { firstName: 'John', lastName: 'Doe', rating: 32 }
      // ];
    }
  };
});

// .factory('docs',[function(){
//   var o = {
//     docs: [
//       {doc_name: 'Rookie Doc', intro: "Good head start", cost: 20},
//       {doc_name: 'Good Doc', intro: "You can never go wrong", cost: 50},
//       {doc_name: 'Okay Doc', intro: "Great guy", cost: 100},
//       {doc_name: 'Donald Doc', intro: "Good in PT", cost: 150}
//     ]
//   };
//   return o;
// }]);
