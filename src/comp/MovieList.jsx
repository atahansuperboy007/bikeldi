import { useState, useEffect} from 'react'
import MovieItem from "./MovieItem";

function MovieList() {
  const [movies, setMovies] =useState ([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1')
    .then(res => res.json())
    .then(data => {
      setMovies(data.results)
    })
  },[])
  const myData = movies.sort ((f,g) => f.id > g.id ? -1 : 1)
  return (
    <div className="movie-list">
      {
        movies.map (movie=> (
          <MovieItem data = {movie} />
        ))
      }
    </div>
  );
}

export default  MovieList;

