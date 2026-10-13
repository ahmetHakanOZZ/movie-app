import { db } from "../config/database.js";

class MovieRepository {

    async getMovies() {

        const [rows] = await db.query("SELECT * FROM movies");

        return rows;

    }

    async getMovieById(id: number) {

        const [rows] = await db.query(
            "SELECT * FROM movies WHERE id = ?",
            id
        )
        return rows;

    }

}

export default new MovieRepository();