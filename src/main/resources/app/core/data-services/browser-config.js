export let BrowserConfig = {
    'USER': {
        name: 'user',
        set: function (obj) {
            sessionStorage[this.name] = JSON.stringify(obj);
        },
        get: function () {
            let user = sessionStorage[this.name];
            if (user)
                return JSON.parse(user);
            else
                return null;
        },
        clear: function () {
            sessionStorage.removeItem(this.name);
        }
    },
    'STATE': {
        name: 'state',
        set: function (obj) {
            sessionStorage[this.name] = JSON.stringify(obj);
        },
        get: function () {
            let state = sessionStorage[this.name];
            if (state)
                return JSON.parse(state);
            else
                return null;
        },
        clear: function () {
            sessionStorage.removeItem(this.name);
        }
    }
};