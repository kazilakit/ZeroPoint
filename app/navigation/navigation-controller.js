/**
 * Created by Lakit on 30-01-17.
 */

(
    function () {
       angular.module('ZeroPoint')
           .controller('NavigationController'
               , ['$scope', '$state', '$http', function ($scope, $state, $http) {

               if(localStorage['User-Data']){
                   $scope.loggedIn = true;
               } else {
                   $scope.loggedIn = false;
               }

               $scope.logUserin = function () {
                   $http.post('api/user/login', $scope.login)
                       .then(function (response) {
                           localStorage.setItem('User-Data', JSON.stringify(response));
                           $scope.loggedIn = true;
                       }).catch(function (exception) {
                           console.log((exception));
                   });
               };

               $scope.logOut = function () {
                   localStorage.clear();
                   $scope.loggedIn = false;
               };
               }]);
    }()
);