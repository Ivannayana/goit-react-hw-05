import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        headers: {
          Authorization: "Bearer 9cda16d98a6e510af2decf0d66e8e7d5",
        },
      })
      .then((response) => setCast(response.data.cast))
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          {actor.name} as {actor.character}
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
