function DetailController($scope, Data){
    $scope.item = Data.selectedItem;

    //automatically choses between Room and Easel
    $scope.showLocation = function(item){
    	if (item.Location == ""){
    		return "Easel " + item.Easel.toString();
    	}
    	else{
    		return item.Location
    	}
    }
}