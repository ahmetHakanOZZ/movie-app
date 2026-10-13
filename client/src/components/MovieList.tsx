import MovieCard from "./MovieCard";

type Movie = {
    id: number,
    title: string,
    year: number,
    image: string
}

type Props = {
    movies: Movie[]
}

export default function MovieList({movies}: Props) {

    return (
        <ul className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )

}