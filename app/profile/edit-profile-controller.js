/**
 * Created by Lakit on 01-02-17.
 */
(
    function () {
       angular.module('ZeroPoint')
           .controller('EditProfileController'
           ,['Upload', '$scope', '$state', '$http',
               function (   Upload,  $scope,  $state,  $http) {

               $scope.user = JSON.parse(localStorage['User-Data']) || undefined;

                   $scope.$watch(function () {
                       return $scope.file;
                   }, function () {
                       $scope.upload($scope.file);
                   });

                   $scope.upload = function (file) {
                       if(file)
                       {
                           Upload.upload({
                               url: 'api/profile/editPhoto',
                               method: 'POST',
                               data: {userId: $scope.user.data.id},
                               file: file
                           }).progress(function (evt) {
                               console.log("firing");
                               //console.log(evt);
                           }).success(function (data) {
                               //console.log(data);
                           }).error(function (error) {
                               console.log((error));
                           });
                       }
                   };
                   
                   $scope.updateUserName = function () {
                       var request = {
                           userId: $scope.user.data.id,
                           userName: $scope.user.userName
                       };

                       console.log($scope.user.data.id);
                       console.log($scope.user.userName);
                       $http.post('/api/profile/updateUserName', request)
                           .then(function () {
                               console.log('done');

                       }).catch(function (err) {
                           console.log(err);

                       });

                   };

                   $scope.updateBio = function () {
                       var request = {
                           userId: $scope.user.data.id,
                           bio: $scope.user.bio
                       };

                       $http.post('/api/profile/updateUserBio', request)
                           .then(function (response) {
                               console.log(response);
                           }).catch(function (error) {
                               console.log(error);
                       });
                   };

               }]);
    }()
);