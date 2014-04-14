function MasterController($scope, Data){
    $scope.items = Data.items;
    
    // this one does not work properly when a filter is applied
    $scope.showDetail = function(index){
        var selectedItem = Data.items[index];
        Data.selectedItem = selectedItem;
        $scope.ons.navigator.pushPage('detail.html', { title : selectedItem.title });
    }

    // this one is not index based and therefore would not be affected by filters
    $scope.showDetail2 = function (item) {
    	var selectedItem = item;
    	Data.selectedItem = selectedItem;
    	$scope.ons.navigator.pushPage('detail.html', { title : selectedItem.title });
        window.setTimeout(clearSearchBox,500);
    }

    function clearSearchBox(){
        $scope.searchText = "";
    }
    

}



/**
 * Truncate Filter
 * @Param text
 * @Param length, default is 10
 * @Param end, default is "..."
 * @return string
 */

 /**
 * Usage
 *
 * var myText = "This is an example.";
 *
 * {{myText|Truncate}}
 * {{myText|Truncate:5}}
 * {{myText|Truncate:25:" ->"}}
 * Output
 * "This is..."
 * "Th..."
 * "This is an e ->"
 *
 */
//angular.module('myApp', []);
myApp.filter('truncate', function () {
    return function (text, length, end) {
        if (isNaN(length))
            length = 10;

        if (end === undefined)
            end = "...";

        if (text.length <= length || text.length - end.length <= length) {
            return text;
        }
        else {
            return String(text).substring(0, length-end.length) + end;
        }

    };
});