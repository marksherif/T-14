var app = angular.module("myApp", []);
app.controller('AppCtrl', ['$scope', function ($scope) {
    $scope.title = 'Productsacascs';
}]);
/var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("Hello World from controller");
    $scope.title = 'Top Sellers in Books'; 
}]);
function AppCtrl($scope) {
    console.log("Hello world from controller");

    product1 = { ID: 1, Name: "Blueberry", Price: "20$", CreatedAt: 3 / 1 / 2018, UpdatedAt: 3 / 1 / 2018, SellerName: "Nawar" };
    product2 = { ID: 2, Name: "Raspberry", Price: "15$", CreatedAt: 3 / 1 / 2018, UpdatedAt: 3 / 1 / 2018, SellerName: "Nawar" };
    product3 = { ID: 3, Name: "Strawberry", Price: "10$", CreatedAt: 3 / 1 / 2018, UpdatedAt: 3 / 1 / 2018, SellerName: "Nawar" };
    product4 = { ID: 4, Name: "cherry", Price: "12$", CreatedAt: 3 / 1 / 2018, UpdatedAt: 3 / 1 / 2018, SellerName: "Nawar" };

    var productslist = [product1, product2, product3, product4];
    $scope.productslist = productslist;
}s
