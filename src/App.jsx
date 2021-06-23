import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Form from './comp/Form';
import MovieList from "./comp/MovieList";
import Search from "./comp/Search";
import Skoro from "./comp/Skoro";
import Movie from "./Movie";
import Popular from "./comp/Popular";
import "./style.css";

function App() {
  return (
    <div className="main">
      <div className="container">
        <BrowserRouter>
          <header>
            <Link to="/" className="logo">
              <img src="https://image.flaticon.com/icons/png/512/1728/1728673.png" alt="" />
              <h1>Movie app</h1>
            </Link>
            <div className="links">
              <Link to="/popular">Фильмы в кино</Link>
              <Link to="/">Cкоро выйдут</Link>
              <Link to="/skoro">Популярные фильмы</Link>
            </div>
            <div className="search">
              <Form />
            </div>
          </header>
          <Switch>
            <Route path="/skoro">
              <Skoro />
            </Route>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route path="/movie/:id">
              <Movie />
            </Route>
            <Route path="/popular">
              <Popular />
            </Route>
            <Route path="/search/:q">
              <Search />
            </Route>
          </Switch>
          <footer>
          <h2>Контактная Информация</h2>
            <img
              src="https://image.flaticon.com/icons/png/512/2111/2111463.png"
              alt=""
            />
            <img
              src="https://image.flaticon.com/icons/png/512/179/179319.png"
              alt=""
            />
            <img
              src="https://image.flaticon.com/icons/png/512/145/145813.png"
              alt=""
            />
            <h4>rakhmedia_b</h4>
            <h3>Created by Bikeldi</h3>
            <h5>(c) .2021.Все права защищены.</h5>
          </footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
