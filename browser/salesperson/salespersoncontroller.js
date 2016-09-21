app.controller('SalesPersonController', function($scope, SalesPersonFactory){
	SalesPersonFactory.fetchAll()
	.then(function(salespeople){
		$scope.salespeople = salespeople;
	});

	$scope.create = function(name){
		console.log(name);
		var newPerson = {
			name: name
		};

		SalesPersonFactory.create(newPerson)
		.then(function(newPerson){
			console.log('got person back');
		});
	};

	$scope.delete = function(salesperson){
		SalesPersonFactory.delete(salesperson)
		.then(function(){
			console.log('deleted')
		});
	};
});