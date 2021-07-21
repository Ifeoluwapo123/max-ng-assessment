"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const http_methods_1 = require("../enums/http-methods");
const apiAxiosCalls = (params) => __awaiter(void 0, void 0, void 0, function* () {
    params.method = params.method.toUpperCase();
    const { url, method, body } = params;
    switch (method) {
        case http_methods_1.httpMethods.GET:
            return yield axios_1.default({
                method,
                url,
            });
        case http_methods_1.httpMethods.POST:
            return {};
        default:
            console.log("cool");
            return {};
    }
});
exports.default = apiAxiosCalls;
