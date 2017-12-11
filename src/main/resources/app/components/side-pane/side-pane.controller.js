export class SidePaneController {
    constructor($scope, $rootScope, $state, $timeout) {
        'ngInject';
        let vm = this;
        vm.DI = () => ({
            $scope, $rootScope, $state, $timeout
        });
    }
}