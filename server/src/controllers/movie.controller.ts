import type { Request, Response } from "express";

import movieService from "../services/movie.service.js";

class MovieController {
  async getMovies(req: Request, res: Response) {

    const movies = await movieService.getMovies();

    res.json(movies);

  }

  async getMovieById(req: Request, res: Request) {

    const id = Number(req.params.id);
    const movie = await movieService.getMovieById(id);

    res.json(movie);

  }
}

export default new MovieController();
