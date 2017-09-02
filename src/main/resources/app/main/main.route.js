
export function MainRouter($stateProvider, $httpProvider) {
	'ngInject';
	$stateProvider
		.state('main', {
			url: '/',
			parent: 'searcin',
			templateUrl: 'main/main.html',
			controller: 'MainController',
			controllerAs: 'main'
		});
}


MainRouter.$inject = ['$stateProvider','$httpProvider'];
