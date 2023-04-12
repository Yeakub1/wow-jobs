import React from "react";

const Details = ({ data }) => {
  const { description, responsibility, educational, experiences } = data;
  return (
    <div className="px-20 ">
      <h1 className="mt-10 text-center bottom-0 relative font-bold text-4xl bg-slate-200 p-10">
        Job Details
      </h1>

      <div className="">
        <h1>{description}</h1>
        <h1>{responsibility}</h1>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Details;
