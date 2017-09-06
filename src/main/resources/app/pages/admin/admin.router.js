
export function AdminRouter($stateProvider, $httpProvider) {
	'ngInject';
	$stateProvider
		.state('admin', {
			url: '/admin/:page',
			parent: 'searcin',
			params: {
				page:"categories"
			},
			templateUrl: 'pages/admin/admin.html',
			controller: 'AdminController',
			controllerAs: 'admin'
		});
}


AdminRouter.$inject = ['$stateProvider','$httpProvider'];
