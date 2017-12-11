export
function SearchBoxDirective() {
let directive = {
    restrict: 'AE',
    templateUrl: 'components/search-box/search-box.html',
    scope: {
        onChange:'&',
        value:'=',
        data:'='
    },
    controller: 'SearchBoxController',
    controllerAs: 'search',
    bindToController: true
    
};
return directive;
}