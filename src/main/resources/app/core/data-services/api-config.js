

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
    }
};
