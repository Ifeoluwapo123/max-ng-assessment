"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movies_controller_1 = require("../controllers/movies.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", movies_controller_1.MoviesController.getMovies);
router.get("/:id", movies_controller_1.MoviesController.getMovieById);
exports.default = router;
