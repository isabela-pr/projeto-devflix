import { useEffect } from "react";
import { useState } from "react";

import logo from "../assets/projeto-devflix.png";
import searchIcon from "../assets/search.svg";

import "./App.css";
import MovieCard from "../components/movieCard/movieCard";
import Footer from "../components/footer/footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const apiKey = "b95efe03";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&S=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(searchTerm);
  };

  // fetch(apiUrl).then((response) => response.json()).then((data) => console.log(data));
  return (
    <div id="app">
      <div className="head">
        <div className="logo">
          <img src={logo} alt="logo devflix" />
        </div>
          <div className="search">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Pesquise por filmes"
            />
            <img
              src={searchIcon}
              alt="Icone de pesquisa"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
      </div>
      <div className="trending">
        <p>Trending Now <ion-icon name="flame-outline"/> </p>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movies={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nenhum filme encontrado 😖</h2>
        </div>
      )}

      <Footer link={"https:github.com.br"}>isabela-pr</Footer>
    </div>
  );
};

export default App;
