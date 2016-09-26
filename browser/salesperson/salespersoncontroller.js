app.controller('SalesPersonController', function($scope, SalesPersonFactory){
	SalesPersonFactory.fetchAll()
	.then(function(salespeople){
		$scope.salespeople = salespeople;
	})
  .catch(function(err){
    console.log(err);
  });

	$scope.create = function(){
		SalesPersonFactory.create($scope.salesPerson)
    .then(function(){
      $scope.salesPerson = null;
    })
    .catch(function(err){
      console.log(err);
    });
	};

	$scope.delete = function(salesperson){
		SalesPersonFactory.delete(salesperson)
    .catch(function(err){
      console.log(err);
    });
	};
});
