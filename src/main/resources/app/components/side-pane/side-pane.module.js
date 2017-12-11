import { SidePaneDirective } from './side-pane.directive';
import { SidePaneController } from './side-pane.controller';

angular.module('searcin.side-pane', [])
    .controller('SidePaneController', SidePaneController)
    .directive('sidePane', SidePaneDirective);