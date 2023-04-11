import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-1 px-20">
      <nav className="md:flex flex justify-between items-center mt-10">
        <div className="font-bold text-3xl">
          <Link to="/">WowJobs</Link>
        </div>
        <div
          className={`font-semibold text-lg absolute md:static duration-500 ${
            open ? "top-10  " : "-top-48"
          }`}
        >
          <Link className="mr-5" to="/statistics">
            Statistics
          </Link>
          <Link className="mr-5" to="/appliedjobs">
            Applied Jobs
          </Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="font-semibold text-xl bg-[#7E90FE] text-white rounded-md px-4 py-2 ">
          <button>
            <Link to="">
              <button>Star Applying</button>
            </Link>
          </button>
        </div>
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <span>
            {open === true ? (
              <XMarkIcon className="h-6 w-6 text-blue-500" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-blue-500" />
            )}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
