app.config(function($stateProvider){
	$stateProvider.state('salesPeople', {
		url: '/salespeople',
		templateUrl: 'salesperson/salesperson.html',
		controller: 'SalesPersonController'
	});
});

app.config(function($stateProvider){
	$stateProvider.state('regions', {
		url: '/regions',
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
