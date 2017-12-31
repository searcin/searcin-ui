
export class HomeController {
	constructor($scope, $rootScope, $state, $stateParams, $location, $translate, HomeService, DataServices, $uibModal, AuthConfig) {
		'ngInject';
		let vm = this;
		vm.DI = () => ({ $scope, $rootScope, $state, $stateParams, $location, $translate, HomeService, DataServices, $uibModal, AuthConfig });
		vm.user = AuthConfig.USER.get();

	}

	search() {
		let vm = this;
		let { HomeService } = vm.DI();
		HomeService.key = vm.searchValue;
		HomeService.suggest().then(function (response) {
			vm.suggestData = response;
		});
	}

	getCategories() {
		let vm = this;
		let { DataServices } = vm.DI();
		DataServices.searchCategories().then(function(response) {
			vm.categories = response.data;
		}, function(error) {
			
		});
	}

}