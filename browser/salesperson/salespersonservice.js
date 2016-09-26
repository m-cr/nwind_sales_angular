app.factory('SalesPersonFactory', function($http){

	var salespeople = [];

	var SalesPersonFactory = {};
  var url = '/api/salespeople/';

	SalesPersonFactory.fetchAll = function(){
		return $http.get(url)
		.then(function(response){
			angular.copy(response.data, salespeople);
			return salespeople;
		});
	};

	SalesPersonFactory.create = function(data){
		return $http.post(url, data)
		.then(function(response){
			var newSalesPerson = response.data;
			salespeople.push(newSalesPerson);
			return newSalesPerson;
		});
	};

	SalesPersonFactory.delete = function(salesperson){
		return $http.delete(url + salesperson.id)
		.then(function(){
        	var idx = salespeople.indexOf(salesperson);
        	salespeople.splice(idx, 1);
      	});
	};

	return SalesPersonFactory;
});
