type Movie = {
    id: number,
    title: string,
    year: number,
    image: string
}

type Props = {
    movie: Movie
}

export default function MovieCard({ movie }: Props) {
  return (
    <li className="movie-card">
      <div className="image-wrapper">
        <img src={movie.image} alt={movie.title} />

        <div className="overlay">
          <button>View Details</button>
        </div>
      </div>

      <h3 className="movie-title">{movie.title}</h3>
      <p>{movie.year}</p>
    </li>
  );
}