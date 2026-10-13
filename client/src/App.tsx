import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const movies = [
    { id: 1, title: "Inception", year: 2010, image:"/movie_images/inception.jpg" },
    { id: 2, title: "Interstellar", year: 2014, image:"/movie_images/interstellar.jpg" },
    { id: 3, title: "The Dark Knight", year: 2008, image:"/movie_images/batman.jpg" },
  ];

  return (
    <div>
      <div className="nav-bar">
        <h1>Movie App</h1>
      </div>

      <MovieList movies={movies} />
    </div>
  );
}

export default App;
