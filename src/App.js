import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const movie1={
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search for movies" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)} />
      </div>


      {
        movies?.length > 0 ? (<div className="container">
          {movies.map((movie) => (<MovieCard movie={movie} />))}
        </div>) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )
      }
    </div>
  );
};

export default App;
