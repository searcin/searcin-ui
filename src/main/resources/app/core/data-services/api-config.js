

export let ApiConfig = {
    'BASEURL': '',
    'WEBURL': '',
    'SAVE_CATEGORY': "/admin/category/save",
    'GET_CATEGORIES': "/admin/categories",
    'DELETE_CATEGORY': "/admin/category/delete/",
    'GET_SUB_CATEGORIES': {
        'url': '',
        'setUrl': function (id) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/admin/sub-categories/" + id;
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'SAVE_SUB_CATEGORY': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/admin/sub-category/save";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'DELETE_SUB_CATEGORY': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/sub-categories/delete/" + payload;
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'GET_SERVICES': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/services/all";
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'ADD_SERVICE': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/services/save";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'UPDATE_SERVICE': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/services/update";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'DELETE_SERVICE': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/services/delete/" + payload;
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'GET_AREAS': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/areas/all";
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'ADD_AREA': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/areas/save";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'UPDATE_AREA': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/areas/update";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'DELETE_AREA': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/areas/delete/" + payload;
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'GET_VENDORS': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/vendors/all";
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'GET_VENDOR_BYID': {
        'url': '',
        'setUrl': function (id) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/vendors/complete/" + id;
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'GET_VENDORS_LIST': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/vendors/list";
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'ADD_VENDOR': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/vendors/save";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'UPDATE_VENDOR': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/vendors/update";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'DELETE_VENDOR': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/vendors/delete/" + payload;
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'ADD_ADDRESS': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/addresses/save";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'GET_ADDRESS_BY_VENDOR': {
        'url': '',
        'setUrl': function (id) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/addresses/findbyvendor/" + id;
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'ADD_CONTACT': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/contacts/save";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'GET_CONTACT_BY_VENDOR': {
        'url': '',
        'setUrl': function (id) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/contacts/findbyvendor/" + id;
            return this;
        },
        'method': 'GET',
        'data': {}
    },
    'ADD_VENDOR_SERVICES': {
        'url': '',
        'setUrl': function (payload) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/vendorservices/save";
            this.data = payload;
            return this;
        },
        'method': 'POST',
        'data': {}
    },
    'GET_SERVICES_BY_VENDOR': {
        'url': '',
        'setUrl': function (id) {
            this.url = ApiConfig.BASEURL + ApiConfig.WEBURL + "/vendorservices/findbyvendor/" + id;
            return this;
        },
        'method': 'GET',
        'data': {}
    }
};
