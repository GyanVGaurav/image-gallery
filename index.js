let app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http) {
  $http
    .get(
      "https://api.unsplash.com/photos/?client_id=CQcsz5ozwaZKuUy3Acfw-SHCp4eZY_waq3e5p7a7n4M&per_page=20&page1"
    )
    .then(
      (response) => {
        $scope.photos = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
});
