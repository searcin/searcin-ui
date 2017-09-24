//import {apiConfig} from "./data-service.config";
import { DataServices } from "./data-service.factory";
import { HttpService } from "./http-service.factory";
import { ApiConfig } from "./api-config";
import { BrowserConfig } from "./browser-config";

angular.module('searcin.data-service', [])
    .factory("HttpService", HttpService)
    .factory("DataServices", DataServices)
    .constant("ApiConfig", ApiConfig)
    .constant("BrowserConfig", BrowserConfig);
