import { MoviesController } from "../controllers/movies.controller";
import express from "express";

const router = express.Router();

router.get("/", MoviesController.getMovies);

router.get("/:id", MoviesController.getMovieById);

export default router;
