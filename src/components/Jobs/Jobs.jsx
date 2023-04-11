import React from 'react';
import './Jobs.css'
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Jobs = ({ job }) => {
    const { name, image, description, time, hour, location, salary } = job;
    return (
      <div className="mb-10 jobs mx-auto shadow-lg">
        <img src={image} alt="" />
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="mb-3">{description}</p>
        <div className="flex mb-3">
          <p className="mr-4 work">{time}</p>
          <p className="work">{hour}</p>
        </div>
        <div className="flex">
          <div className="flex">
            <MapPinIcon className="h-6 w-6 text-slate-700" />
            <p className="mr-5">{location}</p>
            <CurrencyDollarIcon className="h-6 w-6 text-slate-700" />
          </div>
          <p>{salary}</p>
        </div>
        <button className="px-4 py-2 bg-[#7E90FE] text-white font-semibold text-lg rounded-md mt-3">
          <Link>View Details</Link>
        </button>
      </div>
    );
};

export default Jobs;