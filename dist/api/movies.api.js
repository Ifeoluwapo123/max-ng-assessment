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
const baseurl_api_1 = __importDefault(require("./baseurl.api"));
const httpmethods_api_1 = __importDefault(require("./httpmethods.api"));
exports.default = {
    getAllFilms: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield httpmethods_api_1.default({
                url: `${baseurl_api_1.default}/films`,
                method: "GET",
            });
        }
        catch (error) {
            console.log(error);
        }
    }),
    getFilmById: (filmId) => {
        try {
            return httpmethods_api_1.default({
                url: `${baseurl_api_1.default}/films/${filmId}`,
                method: "GET",
            });
        }
        catch (error) {
            console.log(error);
        }
    },
    getA: () => {
        try {
            return httpmethods_api_1.default({
                url: "https://ipapi.co/json/",
                method: "GET",
            });
        }
        catch (error) {
            console.log(error);
        }
    }
};
