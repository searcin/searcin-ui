/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/

import { AppController } from "./app.controller";
import { AppRouter } from "./app.route";
import { AppConfig } from "./app.config";
import { AppRun } from "./app.run";
import { AppConstants } from './app.constants';


angular.module("searcin", ["ui.router",
	"ui.bootstrap",
	"pascalprecht.translate",
	"searcin.data-service",	
	"searcin.home",
	"searcin.admin",
	"searcin.components",
	"searcin.common"
])
	.constant("AppConstants", AppConstants)
	.controller("AppController", AppController)
	.config(AppRouter)
	.config(AppConfig)
	.run(AppRun);
