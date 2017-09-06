
export class HomeController {
	constructor($scope, $rootScope, $state, $stateParams, $location, $translate, MainService)  {
        'ngInject';
		let vm = this;
		vm.DI = () => ({ $scope, $rootScope, $state, $stateParams, $location, $translate, MainService});
		
    }
}