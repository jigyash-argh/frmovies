import React, { useState, useEffect } from "react";
const items = ["Home", "Movies", "Favorites", "About"];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black border-b border-red-600 shadow-lg" : "bg-black"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-tr from-red-500 to-white">
          FRMovies
        </div>
        <div className="flex-1 mx-8 max-w-md flex gap-3 items-center">
          <input
            className="w-full px-4 py-2 rounded-md border border-gray-700 text-white bg-transparent focus:outline-none focus:border-white transition"
            type="search"
            placeholder="Search movies..."
          />
          <button className="px-4 py-2 border-white active:bg-white active:text-black active:border-red-600 active:scale-105 transform  border-1 rounded-xl hover:bg-white hover:text-black transition">
            search
          </button>
          {/* Fav icon (replace with your icon as needed) */}
          <button
            className="text-white hover:text-red-400 transition px-5 py-3"
            aria-label="Favorites"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
        {/* Hamburger Menu (mobile only) */}
        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded text-white border-white fixed right-4 top-4 z-50 focus:outline-none hover:text-red-700 hover:border-red-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {/* Navigation Links (visible on lg and up) */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className=" transition text-lg font-medium px-5 py-3 hover:bg-white hover:text-red-600 rounded"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (shows nav links only) */}
      {menuOpen && (
        <div
          className={`lg:hidden fixed top-20 right-0 h-full w-1/3 bg-black border-l-4 border-red-600 shadow-lg z-40 flex flex-col items-start pt-8 px-6
      transition-transform duration-300 ease-in-out
      ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
    `}
          style={{ minWidth: "220px" }}
        >
          <ul className="flex flex-col space-y-8 w-full">
            {items.map((item, index) => (
              <li key={index} className="w-full">
                <a
                  href={`/${item.toLowerCase()}`}
                  className="block text-lg font-medium text-white hover:text-red-500 px-5 py-3 hover:bg-white hover:text-black rounded transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
