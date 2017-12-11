export
function SidePaneDirective() {
let directive = {
    restrict: 'AE',
    templateUrl: 'components/side-pane/side-pane.html',
    scope: {
        onClose: '&'
    },
    controller: 'SidePaneController',
    controllerAs: 'pane',
    bindToController: true
    
};
return directive;
}