
export class AppController {
	constructor($scope, $rootScope, $location) {
		'ngInject';
		let vm = this;
        vm.DI = () => ({$scope, $rootScope, $location});
	}
}
