
import { MainController } from './main.controller';
import { MainRouter } from './main.route';
import { MainService } from './main.service';


angular.module('searcin.main', [
])
	.config(MainRouter)
	.controller('MainController', MainController)
	.service('MainService', MainService);
