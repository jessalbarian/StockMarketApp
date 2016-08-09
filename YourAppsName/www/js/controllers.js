angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Array object title property defined the second time', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 },
    { title: 'New data from controller', id: 7 }
  ];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}])

.controller('StockCtrl', ['$scope', '$stateParams', 'stockDataService',
function($scope, $stateParams, stockDataService) {

  $scope.ticker = $stateParams.stockTicker;
<<<<<<< HEAD
=======
  $scope.chartView = 1;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 3e7915a... broke it
=======
>>>>>>> parent of 3e7915a... broke it
=======
>>>>>>> parent of 3e7915a... broke it
=======
>>>>>>> parent of 3e7915a... broke it
=======
>>>>>>> parent of 3e7915a... broke it

  $scope.$on("$ionicView.afterEnter", function(){
    getPriceData();
    getDetailsData();
  });

  function getPriceData(){
    var promise = stockDataService.getPriceData($scope.ticker);
      promise.then(function(data){
        console.log(data);
      });
    }
    function getDetailsData(){
      var promise = stockDataService.getDetailsData($scope.ticker);
        promise.then(function(data){
          console.log(data);
        });
      }
=======
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
>>>>>>> parent of d661979... configured yahoo finance api
=======
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
>>>>>>> parent of d661979... configured yahoo finance api
=======
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
>>>>>>> parent of d661979... configured yahoo finance api
=======
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
>>>>>>> parent of d661979... configured yahoo finance api

  $scope.dynamicViewTitleStateParam = $stateParams.id;
  // console.log($scope.dynamicViewTitleStateParam);
});
