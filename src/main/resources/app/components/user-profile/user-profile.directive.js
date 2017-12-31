export
function UserProfileDirective() {
let directive = {
    restrict: 'AE',
    templateUrl: 'components/user-profile/user-profile.html',
    scope: {
        
    },
    controller: 'UserProfileController',
    controllerAs: 'user',
    bindToController: true
    
};
return directive;
}