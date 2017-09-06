
import { AdminController } from './admin.controller';
import { AdminRouter } from './admin.router';
import { AdminConfig } from './admin.config';
import { AdminService } from './admin.service';


angular.module('searcin.admin', [
])
	.config(AdminRouter)
	.constant('AdminConstants', AdminConfig)	
	.service('AdminService', AdminService)
	.controller('AdminController', AdminController);
