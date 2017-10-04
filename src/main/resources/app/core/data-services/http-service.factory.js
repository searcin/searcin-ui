export function HttpService($http, ApiConfig) {
    'ngInject';
    let DI = {
        $http,
        ApiConfig
    };
    return {
        get: function (getUrl) {
            let url = DI.ApiConfig.BASEURL + DI.ApiConfig.WEBURL + getUrl;
            return DI.$http.get(url).then(function (response) {
                return response;
            }, function (error) {
                alert(error.data.error + "\n" + error.data.message);
                return error;
            });
        },
        post: function (postUrl, data) {
            let url = DI.ApiConfig.BASEURL + DI.ApiConfig.WEBURL + postUrl;
            return DI.$http.post(url, data).then(function (response) {
                return response;
            }, function (error) {
                alert(error.data.message);
                return error;
            });
        }
        // other $http wrappers
    };
}