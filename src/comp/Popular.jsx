import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";


function Popular() {
  const [popular, setPopular] = useState([])

  useEffect(() =>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=2')
    .then(res => res.json())
    .then(data => {
      setPopular(data.results)
    })
  },[],)
  const myData = popular.sort ((g,d) => g.id > d.id ? -1 : 1)
  return (
    <div className='list'>
    {
      popular.map(popular => (
        <MovieItem data={popular} />
      ))
    }
    </div>
    );
}

export default Popular;