var storeApp = angular.module('storeApp', []);

storeApp.controller('MainCtrl', function ($scope) {
  $scope.items = [
    {"name":"Grey Suit Jacket", "image":"http://placehold.it/400x400", "uniqueId":"SJ001", "price":399, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Black Suit Jacket", "image":"http://placehold.it/400x400", "uniqueId":"SJ002", "price":449, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Brown Suit Jacket", "image":"http://placehold.it/400x400", "uniqueId":"SJ003", "price":399, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Navy Suit Jacket", "image":"http://placehold.it/400x400", "uniqueId":"SJ004", "price":519, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Blue Pattern Tie", "image":"http://placehold.it/400x400", "uniqueId":"T001", "price":19, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Red Pattern Tie", "image":"http://placehold.it/400x400", "uniqueId":"T002", "price":19, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Yellow Pattern Tie", "image":"http://placehold.it/400x400", "uniqueId":"T003", "price":19, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Cyan Pattern Tie", "image":"http://placehold.it/400x400", "uniqueId":"T004", "price":19, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"White Dress Shirt", "image":"http://placehold.it/400x400", "uniqueId":"DS001", "price":49, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Black Dress Shirt", "image":"http://placehold.it/400x400", "uniqueId":"DS002", "price":49, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Dotted Socks", "image":"http://placehold.it/400x400", "uniqueId":"SKS001", "price":9, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Striped Socks", "image":"http://placehold.it/400x400", "uniqueId":"SKS002", "price":9, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Orange Socks", "image":"http://placehold.it/400x400", "uniqueId":"SKS003", "price":9, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Diagonal Striped Socks", "image":"http://placehold.it/400x400", "uniqueId":"SKS004", "price":9, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }, 
    {"name":"Purple Socks", "image":"http://placehold.it/400x400", "uniqueId":"SKS005", "price":9, "description":"Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum." }
  ];

  $scope.cartItems = [];

  $scope.orderProp = 'name';

  $scope.addItem = function(item) {
    $scope.cartItems.push(item); 
  }


  $scope.removeItem = function(index) {
      $scope.cartItems.splice(index, 1).fadeOut(800);
      $scope.cartItems.fadeOut(5000, done)
  };

});

// Jquery Section 

$(function() {
  $('a').on('click', function() {
      $(this).append(' <i class="fa fa-check"></i>');
      $('i').fadeOut(800);
  });
});

















