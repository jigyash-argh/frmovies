import React from "react";

const PopularMoviesCard = ({
  title = "REACHER",
  languages = "English | Hindi | Tamil | Telugu | Malayalam | Kannada",
  episodeInfo = "NEW EPISODE EVERY THURSDAY",
  description = `Based on Lee Child novel "Persuader", Reacher hurtles into the dark heart of a vast criminal enterprise when trying to rescue an undercover DEA informant whose ti...`,
  image = "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
  ctaLabel = "Watch Now",
  ageRating = "U/A 18+",
}) => {
  return (
    <div
      className="w-full h-[500px] relative flex items-center justify-start rounded-lg overflow-hidden shadow-lg bg-black"
      style={{
        background: `linear-gradient(90deg, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.2) 100%), url(${image}) center/cover no-repeat`,
      }}
    >
      <div className="z-10 pl-16 max-w-2xl">
        <h1 className="text-6xl font-extrabold text-white tracking-widest mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-200 mb-2">{languages}</p>
        <p className="text-2xl font-bold text-white mb-4">{episodeInfo}</p>
        <p className="text-white text-base mb-8">{description}</p>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 hover:scale-110 transform bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-400 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 3v18l15-9-15-9z" />
            </svg>
            {ctaLabel}
          </button>
          <button
            className="w-12 h-12 rounded-full bg-gray-700 bg-opacity-60 flex items-center justify-center text-white text-2xl font-bold hover:bg-gray-600 transition"
            aria-label="Add"
          >
            <span className="flex items-center justify-center w-full h-full">
              +
            </span>
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 right-8">
        <span className="bg-gray-700 text-white text-sm px-4 py-2 rounded-lg">
          {ageRating}
        </span>
      </div>
    </div>
  );
};

export default PopularMoviesCard;
