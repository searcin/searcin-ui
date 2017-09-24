
import { AdminRequest } from "./http-request/admin-request";

export function DataServices(HttpService, ApiConfig) {
    'ngInject';
    let DI = {
        HttpService,
        ApiConfig
    };
    return {
        getCategories: function () {
            return DI.HttpService.get(ApiConfig.GET_CATEGORIES);
        },
        saveCategory: function(payload) {
            return DI.HttpService.post(ApiConfig.SAVE_CATEGORY, payload);
        },
        deleteCategory: function(id) {
            return DI.HttpService.get(ApiConfig.DELETE_CATEGORY + id);
        }
        // },
        // deleteCategory: adminRequest.deleteCategory(DI),
        // getSubCategories: adminRequest.getSubCategories(DI),
        // saveSubCategory: adminRequest.saveSubCategory(DI),
        // deleteSubCategory: adminRequest.deleteSubCategory(DI),
        // getServices: adminRequest.getServices(DI),
        // addService: adminRequest.addService(DI),
        // updateService: adminRequest.updateService(DI),
        // deleteService: adminRequest.deleteService(DI),
        // getAreas: adminRequest.getAreas(DI),
        // addArea: adminRequest.addArea(DI),
        // updateArea: adminRequest.updateArea(DI),
        // deleteArea: adminRequest.deleteArea(DI),
        // getVendors: adminRequest.getVendors(DI),
        // addVendor: adminRequest.addVendor(DI),
        // updateVendor: adminRequest.updateVendor(DI),
        // deleteVendor: adminRequest.deleteVendor(DI),
        // vendorsList: adminRequest.vendorsList(DI),
        // vendorById: adminRequest.vendorById(DI),
        // addAddress: adminRequest.addAddress(DI),
        // findAddressByVendor: adminRequest.findAddressByVendor(DI),
        // addContact: adminRequest.addContact(DI),
        // findContactByVendor: adminRequest.findContactByVendor(DI),
        // addVendorServices: adminRequest.addVendorServices(DI),
        // findServicesByVendor: adminRequest.findServicesByVendor(DI)
    };

}
