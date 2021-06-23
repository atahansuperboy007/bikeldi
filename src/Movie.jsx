import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const link = "https://image.tmdb.org/t/p/w500";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/"+id+"?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU")
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })}, []);


  if (!movie) return null;

  return (
    <div className="movie">
      <img src={link + movie.poster_path} alt="" />
      <div className="movie-text">
         <h2>{movie.title}</h2>
        <h4>Дата выхода : {movie.release_date}</h4>
        <h4>Жанры : Боевик, Драма</h4>
        <h4>Оценка : {movie.vote_average}</h4>
        <h4>Длительность : {movie.runtime} мин</h4>
        <h4>Популярность : {movie.popularity}</h4>
        <h4>{movie.tagline}</h4>
        <p>{movie.overview}</p>

      </div>
    </div>
  );
}

export default Movie

