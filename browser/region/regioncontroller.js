app.controller('RegionController', function($scope, RegionFactory){
	RegionFactory.fetchAll()
	.then(function(regions){
		$scope.regions = regions;
	});
	
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
		.then(function(){
			console.log('deleted')
		});
	};

});