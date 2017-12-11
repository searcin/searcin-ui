
export class HomeController {
	constructor($scope, $rootScope, $state, $stateParams, $location, $translate, HomeService, $uibModal,AuthConfig)  {
        'ngInject';
		let vm = this;
		vm.DI = () => ({ $scope, $rootScope, $state, $stateParams, $location, $translate, HomeService, $uibModal,AuthConfig});
		vm.user = AuthConfig.USER.get();
		
	}
	
	search() {
		let vm = this;
		let { HomeService } = vm.DI();
		HomeService.key = vm.searchValue;
		HomeService.suggest().then(function(response) {
			vm.suggestData = response;
		});
	}

	
	
}