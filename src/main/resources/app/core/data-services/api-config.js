

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
    },
    'GET_SUB_CATEGORIES': {
        'url': '',
        'setUrl': function(id) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/sub-categories/all/" + id;
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'SAVE_SUB_CATEGORY': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/sub-categories/save";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'EDIT_SUB_CATEGORY': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/sub-categories/update";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'DELETE_SUB_CATEGORY': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/sub-categories/delete/"+payload;
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'GET_SERVICES': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/services/all";
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'ADD_SERVICE': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/services/save";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'UPDATE_SERVICE': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/services/update";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'DELETE_SERVICE': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/services/delete/"+ payload;
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'GET_AREAS': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/areas/all";
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'ADD_AREA': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/areas/save";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'UPDATE_AREA': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/areas/update";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'DELETE_AREA': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/areas/delete/"+ payload;
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'GET_VENDORS': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/vendors/all";
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'ADD_VENDOR': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/vendors/add";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'UPDATE_VENDOR': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/vendors/update";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'DELETE_VENDOR': {
        'url': '',
        'setUrl': function(payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/vendors/delete/"+ payload;
            return this;
        },
        'method': 'GET',
        'data': {}
    }
};
