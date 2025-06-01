import React, { useState } from "react";

const MovieCard = ({
  title,
  poster = "https://via.placeholder.com/300x400?text=No+Image",
  year,
  genre,
  director,
  actors,
  plot,
}) => {
  const [details, setdetails] = useState(false);
  const [hovervisible, sethovervisible] = useState(false);

  return (
    <div
      className={`rounded-lg shadow-lg p-2 flex flex-col m-5 items-center w-80 transition-all duration-300
        ${hovervisible ? "bg-transparent" : "bg-transparent"}`}
      onMouseEnter={() => sethovervisible(true)}
      onMouseLeave={() => {
        sethovervisible(false);
        setdetails(false);
      }}
    >
      <div className="relative w-full h-96">
        {/* Movie Image */}
        <img
          src={poster}
          alt={title}
          className={`w-full h-96 object-cover rounded-md transition-all duration-300 ${
            hovervisible ? "blur-sm brightness-75 scale-105" : ""
          }`}
        />
        {/* Blurred overlay BELOW the details */}
        {hovervisible && (
          <div className="absolute inset-0 rounded-md bg-black/30 backdrop-blur-sm pointer-events-none z-0" />
        )}
        {/* Overlay Content */}
        {hovervisible && (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-2 rounded-md transition-all duration-300 z-10 overflow-y-auto max-h-full">
            <h2 className="text-2xl font-bold text-white mb-2 text-center drop-shadow">
              {title}
            </h2>
            {year && (
              <p className="text-gray-200 mb-1">
                <span className="font-semibold">Year:</span> {year}
              </p>
            )}
            {genre && (
              <p className="text-gray-200 mb-1">
                <span className="font-semibold">Genre:</span> {genre}
              </p>
            )}
            <button
              className="hover:text-red-600 text-xl hover:border-red-500 hover:bg-white text-white border border-gray-400 px-4 py-2 rounded mb-2 mt-2 transition"
              onClick={() => setdetails((prev) => !prev)}
            >
              About
            </button>
            <button
              className="flex items-center justify-center rounded-full border border-gray-400 w-16 h-16 mb-2 mt-2 text-white bg-gradient-to-r from-red-600 to-red-400 hover:from-white hover:to-white hover:text-red-600 hover:border-red-500 active:scale-110 transition"
              onClick={() => {
                /* Add play functionality here */
              }}
              aria-label="Play"
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
            </button>
            {details && (
              <div className="w-full flex flex-col items-start mt-2 overflow-y-auto max-h-40">
                {director && (
                  <p className="text-gray-300 mb-1 break-words text-left">
                    <span className="font-semibold">Director:</span> {director}
                  </p>
                )}
                {actors && (
                  <p className="text-gray-300 mb-1 break-words text-left">
                    <span className="font-semibold">Actors:</span> {actors}
                  </p>
                )}
                {plot && (
                  <p className="text-gray-400 text-sm mt-2 break-words text-left">
                    {plot}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
