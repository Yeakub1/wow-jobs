import React, { useEffect, useState } from 'react';
import Jobs from '../Jobs/Jobs';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("featuredjobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    },[])


    return (
      <div className="mt-32 ">
        <div className="text-center">
          <h1 className="font-bold text-4xl mb-4">Featured Jobs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className=" grid lg:grid-cols-2 justify-between mt-10">
          {jobs.map((job) => (
            <Jobs key={job.id} job={job}></Jobs>
          ))}
        </div>
        <div className="text-center mb-20 ">
          <button className="px-4 py-2 font-semibold text-2xl bg-[#7E90FE] text-white rounded-md">
            See All Jobs
          </button>
        </div>
      </div>
    );
};

export default FeaturedJobs;