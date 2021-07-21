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
exports.MoviesController = void 0;
const movies_api_1 = __importDefault(require("../api/movies.api"));
const apiFilterKeys_1 = require("../utilities/apiFilterKeys");
const comment_model_1 = require("../models/comment.model");
const helperFunction_1 = require("../utilities/helperFunction");
const MoviesController = function () { };
exports.MoviesController = MoviesController;
MoviesController.getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, status } = yield movies_api_1.default.getAllFilms();
    if (status == 200) {
        const value = helperFunction_1.mapOutUnwantedFields(helperFunction_1.sortMoviesByDate(data.results), apiFilterKeys_1.allNecessaryMovieKeys);
        return res.status(200).json(value);
    }
    else {
        return res.status(400).json({ error: "Bad Requst || data not found" });
    }
});
MoviesController.getMovieById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, status } = yield movies_api_1.default.getFilmById(Number(req.params.id));
    comment_model_1.CommentModel.findByMovie(Number(req.params.id), function (err, result) {
        return __awaiter(this, void 0, void 0, function* () {
            if (err) {
                res.status(500).json({ error: "server error" });
            }
            else {
                if (status == 200) {
                    const value = helperFunction_1.mapOutUnwantedFields([data], apiFilterKeys_1.allNecessaryMovieKeys);
                    return res.status(200).json(Object.assign(Object.assign({}, value), { comment: result.length }));
                }
                else {
                    return res
                        .status(400)
                        .json({ error: "Bad Requst || data not found" });
                }
            }
        });
    });
});
