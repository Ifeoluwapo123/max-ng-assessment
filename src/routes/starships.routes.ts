import { StarshipsController } from "../controllers/starships.controllers";
import express from "express";

const router = express.Router();

router.get("/:id", StarshipsController.getMovieCharacters);

export default router;
