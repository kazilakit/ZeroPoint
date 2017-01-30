/**
 * Created by Lakit on 30-01-17.
 */
(
  function () {
   angular.module('ZeroPoint')
       .controller('SignUpController'
           ,['$scope','$state', '$http', function ($scope, $state, $http){

           $scope.createUser = function () {

               $http.post('api/user/signup', $scope.newUser)
                   .then(function (response) {

                   }).catch(function (error) {
                   console.log(error);
               });
           };
       }]);
  }()
);
