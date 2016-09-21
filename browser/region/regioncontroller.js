app.controller('RegionController', function($scope, RegionFactory){
	$scope.create = function(zip){
		console.log(zip);
		var newRegion = {
			zip: zip
		};

		RegionFactory.create(newRegion)
		.then(function(newRegion){
			console.log('got region back');
		});
	};

	$scope.delete = function(region){
		RegionFactory.delete(region)
		.then(function(){});
	};

	RegionFactory.fetchAll()
	.then(function(regions){
		console.log(regions);
		$scope.regions = regions;
	});
});