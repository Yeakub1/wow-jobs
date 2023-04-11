import React from 'react';
import JobCatagory from '../Jobcatagory/JobCatagory';
import FeaturedJobs from '../FeatureJobs/FeaturedJobs';


const Header = () => {
    return (
      <div className="px-20">
        <div className="lg:flex mt-5 items-center">
          <div className="lg:w-[50%]">
            <h1 className="font-bold md:text-7xl text-4xl">
              One Step <br></br> Closer To Your <br></br>{" "}
              <span className="text-[#7E90FE]">Dream Job</span>
            </h1>
            <p className="mt-5 text-lg">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="mt-5 px-4 py-2 bg-[#7E90FE] rounded-md text-white font-semibold text-xl">
              <p> Get Started</p>
            </button>
          </div>
          <div className="lg:w-[50%]">
            <img src="https://i.ibb.co/M7HVCJs/slider-img01.png" alt="" />
          </div>
        </div>
        <JobCatagory></JobCatagory>
        <FeaturedJobs></FeaturedJobs>
      </div>
    );
};

export default Header;