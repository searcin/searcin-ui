import { UserProfileDirective } from './user-profile.directive';
import { UserProfileController } from './user-profile.controller';

angular.module('searcin.user-profile', [])
    .controller('UserProfileController', UserProfileController)
    .directive('userProfile', UserProfileDirective);