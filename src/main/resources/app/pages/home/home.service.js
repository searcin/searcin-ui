export class HomeService {
    constructor(DataServices, $q, $rootScope, $filter) {
        'ngInject';
        let vm = this;
        vm.DI = () => ({
            DataServices,
            $q,
            $rootScope,
            $filter
        });
        vm._key = null;
    }

    get key() {
        return this._key;
    }

    set key(key) {
        this._key = key;
    }

    suggest() {
        let vm = this;
        let { DataServices, $q } = vm.DI();
        return $q(function(resolve, reject) {
            DataServices.suggest(vm.key).then(function(response) {
                resolve(response.data);
            });
        });        
    }
}
