import React from "react";
import Nav from "./Components/Nav";
import MovieCard from "./Components/MovieCard";
import PopularMoviesCard from "./Components/PopularMoviesCard";
import { popularMovies, featuredMovie } from "./data/moviesData";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Nav />
      <PopularMoviesCard movies={popularMovies} ctaLabel="Watch Now" />
      <MovieCard movie={featuredMovie} />
    </div>
  );
};

export default App;
