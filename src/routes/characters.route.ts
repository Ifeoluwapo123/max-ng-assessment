import { CharactersController } from "../controllers/characters.controller";
import express from "express";

const router = express.Router();

router.get("/:id", CharactersController.getMovieCharacters);

export default router;
