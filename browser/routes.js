app.config(function($stateProvider){
	$stateProvider.state('salesperson', {
		url: '/salesperson',
		templateUrl: 'salesperson/salesperson.html',
		controller: 'SalesPersonController'
	});
});

app.config(function($stateProvider){
	$stateProvider.state('region', {
		url: '/region',
		templateUrl: 'region/region.html',
		controller: 'RegionController'
	});
});

app.config(function($stateProvider){
	$stateProvider.state('home', {
		url: '/',
		templateUrl: '/home.html'
	});
});