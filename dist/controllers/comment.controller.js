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
exports.CommentController = void 0;
const comment_model_1 = require("../models/comment.model");
const ipAddress_api_1 = __importDefault(require("../api/ipAddress.api"));
const CommentController = function () { };
exports.CommentController = CommentController;
CommentController.getAllComments = function (req, res) {
    comment_model_1.CommentModel.findAll(function (err, data) {
        if (err)
            res.status(500).json({ error: "server error" });
        else
            res.status(200).json(data);
    });
};
CommentController.makeCommment = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userIpAddress = yield ipAddress_api_1.default.getUserPublicAddress();
            const { ip, city, country_name } = userIpAddress.data;
            const data = Object.assign(Object.assign({}, req.body), { ip_address: `${ip}, ${city} ${country_name}` });
            comment_model_1.CommentModel.makeComment(data, function (err, data) {
                if (err)
                    res.status(500).json({ error: err });
                else
                    res.status(200).json({ message: "successfully made a comment" });
            });
        }
        catch (error) {
            console.log(error);
        }
    });
};
CommentController.findByMovie = function (req, res) {
    const id = Number(req.params.id);
    comment_model_1.CommentModel.findByMovie(id, function (err, data) {
        if (err)
            res.status(500).json({ error: "server error" });
        else
            res.status(200).json(data);
    });
};
