import movieRepository from "../repositories/movie.repository.js";

class MovieService {

  async getMovies() {
    
    const movies = await movieRepository.getMovies();
    
    return movies

  }

  async getMovieById(id: number) {

    return movieRepository.getMovieById(id);

  }

}

export default new MovieService();
