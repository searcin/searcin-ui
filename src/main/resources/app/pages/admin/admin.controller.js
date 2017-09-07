
export class AdminController {
	constructor($scope, $rootScope, $state, $stateParams, $location, $translate, AdminConstants, DataServices, $q)  {
        'ngInject';
		let vm = this;
		vm.DI = () => ({ $scope, $rootScope, $state, $stateParams, $location, $translate, AdminConstants, DataServices, $q});
		$scope.$emit("initAdminService");
		vm.menu = AdminConstants.menu;
		vm.active = $stateParams.page;
		vm.url = "pages/admin/html/" + $stateParams.page + ".html";
		vm.data = {};
	}
	
	addCategory() {
		let vm = this;
		let {DataServices}  = vm.DI();
		let saveCategory = DataServices.saveCategory({name:vm.data.name});
		saveCategory.then(function() {
			vm.data.name = "";
		});
	}

	getCategories() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
            DataServices.getCategories().then(function (response) {
                vm.data.categories = response.data;
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
	}

	updateCategory() {
		let vm = this;
		let {DataServices}  = vm.DI();
		let updateCategory = DataServices.updateCategory({id:vm.data.category.id,name:vm.data.category.name});
		updateCategory.then(function() {
			vm.data.category = null;
		});
	}

	deleteCategory() {
		let vm = this;
		let {DataServices}  = vm.DI();
		let updateCategory = DataServices.deleteCategory(vm.data.category.id);
		updateCategory.then(function() {
			vm.data.category = null;
			vm.getCategories();
		});
	}

	addSubCategory() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
        return $q(function (resolve, reject) {
            DataServices.saveSubCategory({name:vm.data}).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
	}
}