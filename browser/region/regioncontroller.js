app.controller('RegionController', function($scope, RegionFactory){
	RegionFactory.fetchAll()
	.then(function(regions){
		$scope.regions = regions;
	})
  .catch(function(err){
    console.log(err);
  });
	
	$scope.create = function(){
		RegionFactory.create($scope.region)
		.then(function(region){
			console.log('got region back');
      $scope.region = null;
		})
    .catch(function(err){
      console.log(err);
    });
	};

	$scope.delete = function(region){
		RegionFactory.delete(region)
		.then(function(){
			console.log('deleted')
		});
	};

});
