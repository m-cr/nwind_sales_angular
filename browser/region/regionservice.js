app.factory('RegionFactory', function($http){

	var regions = [];

	var RegionFactory = {};

	RegionFactory.fetchAll = function(){
		return $http.get('/api/region')
		.then(function(response){
			angular.copy(response.data, regions);
			return regions;
		});
	};

	RegionFactory.create = function(data){
		return $http.post('api/region', data)
		.then(function(response){
			var newRegion = response.data;
			regions.push(newRegion);
			return newRegion;
		});
	};

	RegionFactory.delete = function(region){
		return $http.delete('api/region/' + region.id)
		.then(function(){
        	var idx = regions.indexOf(region);
        	regions.splice(idx, 1);
      	});
	};

	return RegionFactory;
});