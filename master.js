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
    }
}