import React from "react";
import Nav from "./Components/Nav";
import MovieCard from "./Components/MovieCard";
import PopularMoviesCard from "./Components/PopularMoviesCard";
const movie = {
  title: "Inception",
  year: 2010,
  genre: "Sci-Fi",
  director: "Christopher Nolan",
  actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
  plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
  poster: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg", // <-- Dummy image added
};
const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Nav />
      <h1>Featured</h1>
      <PopularMoviesCard />
      <MovieCard {...movie} />
    </div>
  );
};
export default App;
