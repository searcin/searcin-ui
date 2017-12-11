export class SearchBoxController {
    constructor($scope, $rootScope, $state, $timeout) {
        'ngInject';
        let vm = this;
        vm.DI = () => ({
            $scope, $rootScope, $state, $timeout
        });
    }

    change() {
        let vm = this;
        let { $timeout } = vm.DI();
        vm.value = vm.value.trim();
        $timeout(function() {
            if(vm.value !== "") {
                vm.onChange();
            } else {
                vm.data = [];
            }
        }, 0);
    }
}