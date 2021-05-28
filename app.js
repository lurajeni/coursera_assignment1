(function(){
'use strict';
angular.module("lunchCheckApp",[])
.controller('lunchCheckController',function($scope){
$scope.lunchorder="";
$scope.toomuch="";
$scope.checkQuantity=function(){
    $scope.toomuch=checkcount($scope.lunchorder);
};

function checkcount(order)
{   
    if(order.length==0||order.replace(" ","").length==0)
    return "Please enter data first";
    var orders=order.split(",");
    if(orders.length>3)
    return "Too much!";
    else
    return "Enjoy!";
}

})

})();