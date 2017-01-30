/**
 * Created by Lakit on 30-01-17.
 */
(
    function () {
       angular.module('ZeroPoint',['ui.router'])
           .config(function ($stateProvider) {
               $stateProvider
                   .state('signUp',{
                       url: "/signup",
                       templateUrl: "app/signup/signup.html",
                       controller: "SignUpController"
                   });
           });
    }()
);
