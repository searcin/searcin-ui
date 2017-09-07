

export let ApiConfig = {
    'BASEURL': '',
    'WEBURL': '',
    'SAVE_CATEGORY': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/categories/save";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'GET_CATEGORIES': {
        'url': '',
        'setUrl': function() {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/categories/all";
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'UPDATE_CATEGORY': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/categories/update";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'DELETE_CATEGORY': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/categories/delete/" + payload;
            return this;
        },
        'method': 'GET',
        'data': {}
    }
};
