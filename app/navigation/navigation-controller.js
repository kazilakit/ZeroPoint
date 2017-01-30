/**
 * Created by Lakit on 30-01-17.
 */

(
    function () {
       angular.module('ZeroPoint')
           .controller('NavigationController'
               , ['$scope', '$state', '$http', function ($scope, $state, $http) {

               $scope.logUserin = function () {
                   $http.post('api/user/login', $scope.login)
                       .then(function (response) {
                           localStorage.setItem('User-Data', JSON.stringify(response));

                       }).catch(function (exception) {
                           console.log((exception));
                   });
               };
               }]);
    }()
);