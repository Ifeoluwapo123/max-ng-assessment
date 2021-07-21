import { PlanetsController } from "../controllers/planets.controller";
import express from "express";

const router = express.Router();

router.get("/:id", PlanetsController.getMovieCharacters);

export default router;
