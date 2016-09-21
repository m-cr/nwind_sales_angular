app.controller('CompanyStatusController', function(RegionFactory, SalesPersonFactory, $scope){

	RegionFactory.fetchAll()
	.then(function(regions){
		$scope.regions = regions.length;
	});

	SalesPersonFactory.fetchAll()
	.then(function(salesPeople){
		$scope.salespeople = salesPeople.length;
	});

});