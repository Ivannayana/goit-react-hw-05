import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        headers: {
          Authorization: "Bearer 9cda16d98a6e510af2decf0d66e8e7d5",
        },
      })
      .then((response) => setMovie(response.data))
      .catch((error) => console.error(error));
  }, [movieId]);

  if (!movie) return null;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
