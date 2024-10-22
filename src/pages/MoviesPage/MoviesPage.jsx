import { useState } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
        headers: {
          Authorization: "Bearer 9cda16d98a6e510af2decf0d66e8e7d5",
        },
      })
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies"
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
