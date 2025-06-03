import React from "react";
import Nav from "./Components/Nav";
import FeaturedSec from "./Pages/FeaturedSec";
import Popularsec from "./Pages/Popularsec";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Nav />
      <Popularsec />
      <FeaturedSec />
    </div>
  );
};

export default App;
