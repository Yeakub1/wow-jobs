import React from "react";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  InboxStackIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const Details = ({ data, hendleAddToJob }) => {
  const {
    id,
    description,
    responsibility,
    edu,
    exp,
    salary,
    title,
    Phone,
    Email,
    Address,
  } = data;
  return (
    <div className="px-20">
      <h1 className="mt-10 text-center bottom-0 relative font-bold text-4xl bg-slate-200 p-10">
        Job Details
      </h1>

      <div className="grid lg:grid-cols-2 mt-16">
        <div className="w-[100%]">
          <h1 className="mb-5">
            <span className="font-bold text-lg">Job Description:</span>{" "}
            {description}
          </h1>
          <h1 className="mb-5">
            <span className="font-bold text-lg">Job Responsibility:</span>{" "}
            {responsibility}
          </h1>
          <h1 className="font-bold text-lg">Educational Requirements:</h1>
          <h1 className="mb-5">{edu}</h1>
          <h1 className="font-bold text-lg">Experiences:</h1>
          <h1 className="mb-5">{exp}</h1>
        </div>
        <div className="lg:w-[50%] bg-slate-100 lg:ml-60 rounded-md">
          <h1 className="font-bold text-lg text-center mt-5 mb-4">
            Job Details
          </h1>
          <hr />
          <div className=" p-7">
            <div className="flex">
              <CurrencyDollarIcon className="h-6 w-6 text-black" />
              <h2 className="mb-5">
                <span className="font-bold text-lg"> Salary:</span> {salary}
              </h2>
            </div>

            <div className="flex ">
              <CalendarDaysIcon className="h-6 w-6 text-black" />
              <h2>
                <span className="font-bold text-lg">Job Title: </span>
                {title}
              </h2>
            </div>

            <h1 className="font-bold text-xl mt-5 mb-5">Contact Information</h1>
            <hr />

            <div className="flex ">
              <PhoneIcon className="h-6 w-6 text-black" />
              <h2 className="mb-5">
                <span className="font-bold text-lg ">Phone: </span> {Phone}
              </h2>
            </div>

            <div className="flex ">
              <InboxStackIcon className="h-6 w-6 text-black" />
              <h2 className="mb-5">
                <span className="font-bold text-lg ">Email: </span> {Email}
              </h2>
            </div>
            <div className="flex ">
              <MapPinIcon className="h-6 w-6 text-black" />
              <h2>
                <span className="font-bold text-lg">Address: </span> {Address}
              </h2>
            </div>
          </div>
          <div className="text-center px-4 py-2 bg-blue-400 text-lg font-semibold">
            <button onClick={() => hendleAddToJob(id)} className="">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
