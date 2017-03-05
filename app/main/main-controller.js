/**
 * Created by kazi_ on 3/1/2017.
 */
(function () {

    angular.module('ZeroPoint')
        .controller('MainController', ['$scope', '$http', '$interval'
            , function ($scope,  $http,  $interval) {

            if(localStorage['User-Data'] !== undefined){
                $scope.user = JSON.parse(localStorage['User-Data']);
                console.log($scope.user);
            }
            $scope.postFeed = function () {
                var request = {
                    user: $scope.user.data.userName || $scope.user.email,
                    userId: $scope.user.data.id,
                    image: $scope.user.data.image,
                    content: $scope.newFeed

                };
                console.log(request);
                $http.post('/api/feed/postFeed', request)
                    .then(function (response) {
                        console.log(response.data);
                        $scope.feeds = response.data;
                    })
                    .catch(function (error) {
                        console.log(error);

                    })
            }

            function getFeeds(initial) {

                $http.get('/api/feed/getFeeds')
                    .then(function (response) {
                        console.log(response);
                        if(initial) {
                            $scope.feeds = response.data;
                        }
                        else {
                            if(response.data.length > $scope.feeds) {
                                $scope.incommingFeeds = response.data;
                            }
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }


            $interval(function () {
                getFeeds(false);
                if($scope.incommingFeeds) {
                    $scope.difference = $scope.incommingFeeds.length - $scope.feeds.length;
                }
            },5000)
            getFeeds(true);
            
            $scope.setNewFeeds = function () {

                $scope.feeds = angular.copy($scope.incommingFeeds);
                $scope.incommingFeeds = undefined;

                
            }
        }]);
}())