import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/movie/day", {
        headers: {
          Authorization: "Bearer 9cda16d98a6e510af2decf0d66e8e7d5",
        },
      })
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  return <MovieList movies={movies} />;
};

export default HomePage;
