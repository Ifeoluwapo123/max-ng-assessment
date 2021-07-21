"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const CommentModel = function () { };
exports.CommentModel = CommentModel;
CommentModel.makeComment = function (data, callback) {
    connection_1.default.query("INSERT INTO movies_comments SET ?", data, (err, rows, fields) => {
        if (err) {
            console.log(err);
            return callback(true, null);
        }
        else
            return callback(null, rows);
    });
};
CommentModel.findAll = function (callback) {
    connection_1.default.query("SELECT * FROM movies_comments ORDER BY id DESC", (err, rows, fields) => {
        if (err)
            return callback(true, null);
        else {
            return callback(null, rows);
        }
    });
};
CommentModel.findByMovie = function (id, callback) {
    connection_1.default.query("SELECT * FROM movies_comments WHERE movie_id = ?", id, (err, rows, fields) => {
        if (err) {
            console.log(err);
            return callback(true, null);
        }
        else {
            return callback(null, rows);
        }
    });
};
