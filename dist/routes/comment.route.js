"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_controller_1 = require("../controllers/comment.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", comment_controller_1.CommentController.getAllComments);
router.post("/create", comment_controller_1.CommentController.makeCommment);
router.get("/:id", comment_controller_1.CommentController.findByMovie);
exports.default = router;
