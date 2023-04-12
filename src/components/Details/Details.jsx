import React from "react";

const Details = ({ data }) => {
  const { description, responsibility, edu, exp, edue, expe, salary, title } =
    data;
  return (
    <div className="px-20 ">
      <h1 className="mt-10 text-center bottom-0 relative font-bold text-4xl bg-slate-200 p-10">
        Job Details
      </h1>

      <div className="grid grid-cols-2 mt-16">
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
        <div className="w-[50%] bg-slate-100 ml-60 rounded-md">
          <h1 className="font-bold text-lg text-center mt-5 mb-4">
            Job Details
          </h1>
          <hr />
          <div className=" p-7">
            <h2>
              <span className="font-bold text-lg">Salary:</span> {salary}
            </h2>
            <h2>
              <span className="font-bold text-lg">Job Title: </span>
              {title}
            </h2>
            <h1 className="font-bold text-xl mt-5 mb-5">Contact Information</h1>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
