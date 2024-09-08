import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>
          {}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
