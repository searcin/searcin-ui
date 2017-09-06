export function AppRun($rootScope, $http, ApiConfig, $location) {

    ApiConfig.BASEURL = window.env.BASE_URL;
    ApiConfig.WEBURL = window.env.WEB_SERVICE;

    
}



AppRun.$inject = ['$rootScope', '$http', 'ApiConfig', '$location'];
