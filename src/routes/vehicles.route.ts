import { VehiclesController } from "../controllers/vehicles.controller";
import express from "express";

const router = express.Router();

router.get("/:id", VehiclesController.getMovieCharacters);

export default router;
