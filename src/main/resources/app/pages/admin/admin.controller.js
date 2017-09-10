
export class AdminController {
	constructor($scope, $rootScope, $state, $stateParams, $location, $translate, AdminConstants, DataServices, $q) {
		'ngInject';
		let vm = this;
		vm.DI = () => ({ $scope, $rootScope, $state, $stateParams, $location, $translate, AdminConstants, DataServices, $q });
		$scope.$emit("initAdminService");
		vm.menu = AdminConstants.menu;
		vm.active = $stateParams.page;
		vm.url = "pages/admin/html/" + $stateParams.page + ".html";
		vm.data = {};
	}

	addCategory() {
		let vm = this;
		let { DataServices } = vm.DI();
		let saveCategory = DataServices.saveCategory({ name: vm.data.name });
		saveCategory.then(function () {
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
		let { DataServices } = vm.DI();
		let updateCategory = DataServices.updateCategory({ id: vm.data.category.id, name: vm.data.category.name });
		updateCategory.then(function () {
			vm.data.category = null;
		});
	}

	deleteCategory() {
		let vm = this;
		let { DataServices } = vm.DI();
		let updateCategory = DataServices.deleteCategory(vm.data.category.id);
		updateCategory.then(function () {
			vm.data.category = null;
			vm.getCategories();
		});
	}

	saveSubCategory() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.saveSubCategory({ name: vm.data.name, category_id: vm.data.categoryId }).then(function (response) {
				vm.data.name = "";
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	updateSubCategory() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.updateSubCategory({ id: vm.data.subcategory.id, name: vm.data.subcategory.name, category_id: vm.data.categoryId }).then(function (response) {
				vm.data.subcategory = "";
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	deleteSubCategory() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.deleteSubCategory(vm.data.subcategory.id).then(function (response) {
				vm.data.subcategory = "";
				vm.getSubCategories();
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	getSubCategories() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.getSubCategories(vm.data.categoryId).then(function (response) {
				vm.data.subcategories = response.data;
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	getServices() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.getServices().then(function (response) {
				vm.data.services = response.data;
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	addService() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.addService({name:vm.data.name,description:vm.data.description}).then(function (response) {
				vm.data = {};
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	updateService() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.updateService({id:vm.data.service.id,name:vm.data.service.name,description:vm.data.service.description}).then(function (response) {
				vm.data.service = {};
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	deleteService() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.deleteService(vm.data.service.id).then(function (response) {
				vm.data.service = {};
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	getAreas() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.getAreas().then(function (response) {
				vm.data.areas = response.data;
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	addArea() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.addArea({name:vm.data.name}).then(function (response) {
				vm.data = {};
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	updateArea() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.updateArea({id:vm.data.area.id,name:vm.data.area.name}).then(function (response) {
				vm.data.area = {};
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	deleteArea() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.deleteArea(vm.data.area.id).then(function (response) {
				vm.data.area = {};
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}


	getVendors() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.getVendors().then(function (response) {
				vm.data.vendors = response.data;
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	addVendor() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		let selectedServices = [];
		angular.forEach(vm.data.services, function(item, $index) {
			if(item.selected) {
				selectedServices.push(item.id);
			}
		});
		return $q(function (resolve, reject) {
			DataServices.addVendor({vendor:vm.data.vendor,contact:vm.data.contact,address:vm.data.address,services:selectedServices}).then(function (response) {
				alert("Successfully Added!");
				vm.data = {};
				vm.getCategories();
				vm.getAreas();
				vm.getServices();
				resolve(response);
			}, function (error) {
				alert("Something went wrong");
				reject(error);
			});
		});
	}

	updateVendor() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.updateArea({id:vm.data.area.id,name:vm.data.area.name}).then(function (response) {
				vm.data.area = {};
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}

	deleteVendor() {
		let vm = this;
		let { DataServices, $q } = vm.DI();
		return $q(function (resolve, reject) {
			DataServices.deleteArea(vm.data.area.id).then(function (response) {
				vm.data.area = {};
				resolve(response);
			}, function (error) {
				reject(error);
			});
		});
	}
}