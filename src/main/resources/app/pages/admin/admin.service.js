export class AdminService {
    constructor(DataServices, $q, $rootScope, $filter) {
        'ngInject';
        let vm = this;
        vm.DI = () => ({
            DataServices,
            $q,
            $rootScope,
            $filter
        });

        $rootScope.$on("initAdminService", function () {
            vm.init();
        });

    }

    init() {
        this._categoryName = null;
    }

    set categoryName(str) {
        this._categoryName = { name: str };
    }

    get categoryName() {
        return this._categoryName;
    }

    saveCategory() {
        let vm = this;
        let { DataServices, $q } = vm.DI();
        return $q(function (resolve, reject) {
            DataServices.saveCategory(vm.categoryName).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    }

}
