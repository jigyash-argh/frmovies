import React, { useState } from "react";
import { motion } from "framer-motion";
import { popularMovies } from "../data/moviesData";
import PopularMoviesCard from "../Components/PopularMoviesCard";

const Popularsec = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? popularMovies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === popularMovies.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 py-8 relative"
    >
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-bold mb-6">Popular Movies</h2>
        <div className="relative w-full">
          <PopularMoviesCard movie={popularMovies[current]} />
          {/* Left Button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center z-20 transition"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          {/* Right Button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center z-20 transition"
            onClick={handleNext}
            aria-label="Next"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Popularsec;
