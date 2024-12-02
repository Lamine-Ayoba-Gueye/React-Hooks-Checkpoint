import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "GUERRA",
      description: "Un film de 2 soeurs.",
      imgURL: "1.jpg",
      rating: 9,
    },
    {
      title: "Paul vs Tyson",
      description: "Box",
      imgURL: "2.jpg",
      rating: 8,
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <h1>Application de Cinéma</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <MovieList movies={movies} filter={filter} addMovie={addMovie} />
    </div>
  );
};

export default App;
