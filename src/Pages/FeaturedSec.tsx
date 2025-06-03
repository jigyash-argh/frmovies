import React from 'react';
import { motion } from 'framer-motion';
import { featuredMovies } from '../data/moviesData';
import MovieCard from '../Components/MovieCard';

const FeaturedSec = () => {
  // Movies already come from the featuredMovies array, so we can use them directly

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-6">Featured Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </motion.div>
  )
}

export default FeaturedSec;