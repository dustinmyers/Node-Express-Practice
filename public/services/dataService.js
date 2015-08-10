app.service('dataService', ['$http', '$q', function($http, $q) {
    
    
    this.getTestData = function(attitude) {
      var dfr = $q.defer();
      console.log("getTestData running:", attitude);
      $http.get('https://node-express-practice-c9-dustinmyers.c9.io/api/testData/' + attitude).then(function(res) {
        var msg = res.data.message;
        dfr.resolve(msg);
      });
      return dfr.promise;
    };
    
}]);