"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const planets_controller_1 = require("../controllers/planets.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/:id", planets_controller_1.PlanetsController.getMovieCharacters);
exports.default = router;
