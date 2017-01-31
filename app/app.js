/**
 * Created by Lakit on 30-01-17.
 */
(
    function () {
       angular.module('ZeroPoint',['ui.router', 'ngFileUpload'])
           .config(function ($stateProvider) {
               $stateProvider
                   .state('signUp',{
                       url: "/signup",
                       templateUrl: "app/signup/signup.html",
                       controller: "SignUpController"
                   })
                   .state('editProfile',{
                       url: "/edit-profile",
                       templateUrl: "app/profile/edit-profile-view.html",
                       controller: "EditProfileController"
                   })

           });
    }()
);
