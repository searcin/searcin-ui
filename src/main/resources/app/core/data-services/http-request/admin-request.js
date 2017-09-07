export class AdminRequest {
    constructor() {
        let vm = this;
    }
    saveCategory(DI) {
        return function (payload) {
            return DI.$http(DI.ApiConfig.SAVE_CATEGORY.setUrl(payload));
        };
    }
    updateCategory(DI) {
        return function (payload) {
            return DI.$http(DI.ApiConfig.UPDATE_CATEGORY.setUrl(payload));
        };
    }
    getCategories(DI) {
        return function () {
            return DI.$http(DI.ApiConfig.GET_CATEGORIES.setUrl());
        };
    }
    deleteCategory(DI) {
        return function (payload) {
            return DI.$http(DI.ApiConfig.DELETE_CATEGORY.setUrl(payload));
        };
    }
}
