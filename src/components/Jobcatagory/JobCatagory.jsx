import React, { useEffect, useState } from "react";
import SingleJob from "../SingleJob/SingleJob";

const JobCatagory = () => {
  const [job, setJob] = useState([]);

  useEffect(() => {
    fetch("jobcategory.json")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  return (
    <div className="px-20">
      <div className="text-center">
        <h1 className="font-bold text-4xl mb-4">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-10">
        {job.map((jb) => (
          <SingleJob key={jb.id} jb={jb}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default JobCatagory;
