
export class AdminController {
	constructor($scope, $rootScope, $state, $stateParams, $location, $translate, AdminConstants, AdminService)  {
        'ngInject';
		let vm = this;
		vm.DI = () => ({ $scope, $rootScope, $state, $stateParams, $location, $translate, AdminConstants, AdminService});
		$scope.$emit("initAdminService");
		vm.menu = AdminConstants.menu;
		vm.active = $stateParams.page;
		vm.url = "pages/admin/html/" + $stateParams.page + ".html";
		vm.data = {};
	}
	
	addCategory() {
		let vm = this;
		let {AdminService}  = vm.DI();
		AdminService.categoryName = vm.data.categoryName;
		let saveCategory = AdminService.saveCategory();
		saveCategory.then(function() {
			vm.data.categoryName = "";
		});
	}
}