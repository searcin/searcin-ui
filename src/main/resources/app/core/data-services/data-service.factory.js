
import { AdminRequest } from "./http-request/admin-request";

export function DataServices($log, $q, $http, $rootScope, ApiConfig, BrowserConfig) {
    'ngInject';
    let DI = {
        $log,
        $http,
        $q,
        $rootScope,
        ApiConfig,
        BrowserConfig
    };

    let adminRequest = new AdminRequest();
    return {
        saveCategory: adminRequest.saveCategory(DI)
    };

}
