import { Router } from "express";
import movieController from "../controllers/movie.controller.js";

const router = Router();

router.get("/", movieController.getMovies)
router.get("/:id", movieController.getMovieById)

export default router;