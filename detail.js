function DetailController($scope, Data){
    $scope.item = Data.selectedItem;

    //automatically choses between Room and Easel
    $scope.showLocation = function(item){
    	if (item.Location != "Hallway"){
    		return item.Location;
    	}
    	else if (item.Easel != ""){
    		return "Hallway Easel " + item.Easel.toString();
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