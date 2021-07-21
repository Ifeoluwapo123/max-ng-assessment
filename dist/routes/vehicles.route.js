"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehicles_controller_1 = require("../controllers/vehicles.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/:id", vehicles_controller_1.VehiclesController.getMovieCharacters);
exports.default = router;
