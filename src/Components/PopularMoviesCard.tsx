import { motion, AnimatePresence } from "framer-motion";

interface Movie {
  title: string;
  languages?: string;
  episodeInfo?: string;
  plot?: string;
  poster?: string;
  ageRating?: string;
}

interface PopularMoviesCardProps {
  movie: Movie;
  ctaLabel?: string;
}

const PopularMoviesCard = ({ movie, ctaLabel = "Watch Now" }: PopularMoviesCardProps) => {
  const {
    title,
    languages,
    episodeInfo,
    plot: description,
    poster: image,
    ageRating,
  } = movie || {};

  // Since we're now handling a single movie, we don't need these navigation functions
  
  if (!movie) return null;

  return (
    <motion.div 
      className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl group"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
            loading="eager"
            onError={(e) => {
              const imgElement = e.target as HTMLImageElement;
              imgElement.src = "https://via.placeholder.com/1920x1080?text=Movie+Poster";
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      {/* Movie content */}
      <div className="relative z-10 h-full flex items-center pl-16 pr-32">
        <AnimatePresence mode="wait">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <motion.h1 
            className="text-6xl font-extrabold text-white tracking-wider mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {title}
          </motion.h1>
          {languages && (
            <motion.p 
              className="text-lg text-gray-300 mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              {languages}
            </motion.p>
          )}
          {episodeInfo && (
            <motion.p 
              className="text-2xl font-bold text-yellow-400 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {episodeInfo}
            </motion.p>
          )}
          <motion.p 
            className="text-white text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {description}
          </motion.p>
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <motion.button 
              className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 3v18l15-9-15-9z" />
              </svg>
              {ctaLabel}
            </motion.button>
            <motion.button
              className="w-12 h-12 rounded-full bg-gray-700/80 hover:bg-gray-600 flex items-center justify-center text-white text-2xl font-bold"
              aria-label="Add to watchlist"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(107, 114, 128, 0.9)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              +
            </motion.button>
          </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Age rating */}
      <AnimatePresence>
        {ageRating && (
          <motion.div 
            className="absolute bottom-8 right-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.span 
              className="bg-gray-700/80 text-white text-sm px-4 py-2 rounded-lg backdrop-blur-sm inline-block"
              whileHover={{ scale: 1.05 }}
            >
              {ageRating}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation is removed since we're only showing one movie */}
    </motion.div>
  );
};

export default PopularMoviesCard;
