import { CommentController } from "../controllers/comment.controller";
import express from "express";

const router = express.Router();

router.get("/", CommentController.getAllComments);

router.post("/create", CommentController.makeCommment);

router.get("/:id", CommentController.findByMovie);

export default router;
