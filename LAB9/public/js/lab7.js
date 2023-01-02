angular.module("grocery",[])

.filter('strUpp',function(){
    return function( str ) {
      var revStr = str.split(' ');
      return revStr.map(function(wrd){return wrd.charAt(0).toUpperCase() + wrd.substr(1).toLowerCase();}).join(' ');
    }
 })

.controller("groceryctrl",function($scope, $http)
{
    $http.get("http://localhost:3000")
    .then(function(response) {
      $scope.fd=response.data;
      $scope.rowlimit=6;
      $scope.orderByMe = function(x) {
          $scope.myOrderBy = x;
      }
      $scope.customStyle = {};
      $scope.turnGreen = function (){
        $scope.customStyle.style = {"color":"green"};
      }
      $scope.fname = " ";  
  
      $scope.changeColorFilter = function (item){
      
          if (item.category == 'Organic') {
              item.class = 'organic';
          }
          else if(item.category == 'Cookies'){
              item.class= 'cookies';
          }
          else if(item.category == 'Bakery'){
              item.class= 'bakery';
          }
          else if(item.category == 'Spreads'){
              item.class= 'spreads';
          }
          else if(item.category == 'Drinks'){
              item.class= 'drinks';
          }
      
          return true;
      
      };
    })
});