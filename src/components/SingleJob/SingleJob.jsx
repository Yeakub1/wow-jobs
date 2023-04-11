import React from 'react';
import './SingleJobs.css';


const SingleJob = ({ jb }) => {
    const { name, images, description } = jb;
    return (
      <div className="jobs mx-auto shadow-md rounded-md">
        <div className="single-cart ">
          <img src={images} alt="" />
          <h1 className="font-semibold text-lg mb-2"> {name}</h1>
          <p>{description}</p>
        </div>
      </div>
    );
};

export default SingleJob;