import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Movie {
  title: string;
  poster?: string;
  year?: string;
  genre?: string;
  director?: string;
  actors?: string;
  plot?: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = (props: MovieCardProps) => {
  const { movie } = props;
  // Default poster value if not provided
  const poster = movie.poster || "https://via.placeholder.com/300x400?text=No+Image";
  const [details, setDetails] = useState(false);
  const [hoverVisible, setHoverVisible] = useState(false);

  return (
    <motion.div
      className="rounded-lg shadow-lg p-2 flex flex-col m-5 items-center w-80"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setHoverVisible(true)}
      onMouseLeave={() => {
        setHoverVisible(false);
        setDetails(false);
      }}
    >
      <motion.div className="relative w-full h-96 overflow-hidden rounded-md">
        {/* Movie Image */}
        <motion.img
          src={poster}
          alt={movie.title}
          className="w-full h-96 object-cover rounded-md"
          animate={{
            filter: hoverVisible ? "blur(4px) brightness(0.75)" : "blur(0px) brightness(1)",
            scale: hoverVisible ? 1.05 : 1
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
        />
        {/* Blurred overlay BELOW the details */}
        <AnimatePresence>
          {hoverVisible && (
            <motion.div 
              className="absolute inset-0 rounded-md bg-black/30 backdrop-blur-sm pointer-events-none z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
        {/* Overlay Content */}
        <AnimatePresence>
          {hoverVisible && (
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center px-4 py-2 rounded-md z-10 overflow-y-auto max-h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
            <motion.h2 
              className="text-2xl font-bold text-white mb-2 text-center drop-shadow"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {movie.title}
            </motion.h2>
            {movie.year && (
              <motion.p 
                className="text-gray-200 mb-1"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <span className="font-semibold">Year:</span> {movie.year}
              </motion.p>
            )}
            {movie.genre && (
              <motion.p 
                className="text-gray-200 mb-1"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="font-semibold">Genre:</span> {movie.genre}
              </motion.p>
            )}
            <motion.button
              className="hover:text-red-600 text-xl hover:border-red-500 hover:bg-white text-white border border-gray-400 px-4 py-2 rounded mb-2 mt-2"
              onClick={() => setDetails((prev) => !prev)}
              initial={{ y: 10, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
            <motion.button
              className="flex items-center justify-center rounded-full border border-gray-400 w-16 h-16 mb-2 mt-2 text-white bg-gradient-to-r from-red-600 to-red-400 hover:from-white hover:to-white hover:text-red-600 hover:border-red-500"
              onClick={() => {
                /* Add play functionality here */
              }}
              aria-label="Play"
              initial={{ y: 10, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="12"
                  fill="currentColor"
                  opacity="0.15"
                />
                <path d="M9 7v10l8-5-8-5z" fill="white" />
              </svg>
            </motion.button>
            <AnimatePresence>
              {details && (
                <motion.div 
                  className="w-full flex flex-col items-start mt-2 overflow-y-auto max-h-40"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {movie.director && (
                    <motion.p 
                      className="text-gray-300 mb-1 break-words text-left"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <span className="font-semibold">Director:</span> {movie.director}
                    </motion.p>
                  )}
                  {movie.actors && (
                    <motion.p 
                      className="text-gray-300 mb-1 break-words text-left"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <span className="font-semibold">Actors:</span> {movie.actors}
                    </motion.p>
                  )}
                  {movie.plot && (
                    <motion.p 
                      className="text-gray-400 text-sm mt-2 break-words text-left"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {movie.plot}
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default MovieCard;
