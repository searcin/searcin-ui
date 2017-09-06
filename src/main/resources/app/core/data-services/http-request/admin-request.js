export class AdminRequest {
    constructor() {
      let vm = this;
    }
    saveCategory(DI) {
      return function(payload) {
        return DI.$http(DI.ApiConfig.SAVE_CATEGORY.setUrl(payload));
      };
    }
    
  }
  