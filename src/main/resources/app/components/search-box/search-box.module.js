import { SearchBoxDirective } from './search-box.directive';
import { SearchBoxController } from './search-box.controller';

angular.module('searcin.search-box', [])
    .controller('SearchBoxController', SearchBoxController)
    .directive('searchBox', SearchBoxDirective);