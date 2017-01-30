/**
 * Created by Kazi Lakit on 1/29/2017.
 */
(function () {
    angular.module('ZeroPoint',['ui.router'])
        .config(function ($stateProvider) {

            $stateProvider
                .state('signUp',{
                    url: "/signup",
                    templateUrl: "app/signup/signup.html",
                    controller: "SignupController"
                });
            
        });
}());