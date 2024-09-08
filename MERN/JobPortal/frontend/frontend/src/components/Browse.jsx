import React from "react";
import Navbar from "./shared/Navbar";

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">Search Results</h1>
        <div className="grid grid-cols-3 gap-4"></div>
      </div>
    </div>
  );
};

export default Browse;
