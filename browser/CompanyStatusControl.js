app.controller('CompanyStatusController', function(RegionFactory, SalesPersonFactory, $scope){

	RegionFactory.fetchAll()
	.then(function(regions){
		$scope.regions = regions;
	});

	SalesPersonFactory.fetchAll()
	.then(function(salesPeople){
		$scope.salespeople = salesPeople;
	});

});