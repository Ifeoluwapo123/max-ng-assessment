"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig_1 = __importDefault(require("./dbConfig"));
const mysql2_1 = __importDefault(require("mysql2"));
let connection = mysql2_1.default.createPool(dbConfig_1.default);
exports.default = connection;
