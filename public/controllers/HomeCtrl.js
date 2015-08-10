app.controller('HomeCtrl', ['$scope', 'dataService', function($scope, dataService) {
    
    // $scope.test = 'Its ALIVE!';
    $scope.rude = false;
    $scope.positive = false;
    
    $scope.testData = function() {
        if($scope.rude === true && $scope.positive === true) {
             return $scope.nodeTestData = "I think you're confused... Just choose one option!";
        }
        if($scope.rude === true) {
            $scope.attitude = 'rude';
        }
        if($scope.positive === true) {
            $scope.attitude = 'positive';
        } 
        if($scope.rude === false && $scope.positive === false) {
            return $scope.nodeTestData = "Uhh... You forgot to pick an option. That's embarrassing";
        }
        console.log("testData running: ", $scope.attitude);
        dataService.getTestData($scope.attitude).then(function(res) {
            console.log('HomeCtrl ln 7: ', res);
            $scope.nodeTestData = res;
        });
    };
}]);