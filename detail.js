function DetailController($scope, Data){
    $scope.item = Data.selectedItem;

    //automatically choses between Room and Easel
    $scope.showLocation = function(item){
    	if (item.Location != "" || item.Location != null){
    		return item.Location;
    	}
    	else if (item.Easel != "" || item.Easel != null){
    		return "Easel " + item.Easel.toString();
    	}
    	else{
    		return "";
    	}
    }

    //navigates back to previous page
    $scope.goBack = function(){
    	$scope.ons.navigator.popPage();
    }
}