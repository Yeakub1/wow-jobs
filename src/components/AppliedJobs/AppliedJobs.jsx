import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeatureJobs/FeaturedJobs';
import Jobs from '../Jobs/Jobs';

const AppliedJobs = () => {  
  const { newArry } = useLoaderData();

    return (
      <div className="px-20">
        <h1 className="mt-10 text-center bottom-0 relative font-bold text-4xl bg-slate-200 p-10">
          Job Details
        </h1>
        <div className="flex min-h-screen items-start justify-start bg-gray-100 text-gray-900">
          <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
            <h1 className='font-semibold text-xl'>{newArry.length ? 'Review Job Item' : 'Job is EMPTY!!'}</h1>
            
            <ul className='flex flex-col divide-y divide-gray-700'>
              {
                newArry.map(product=> <FeaturedJobs key={product.id}></FeaturedJobs>)
              }
            </ul>
          </div>
        </div>

      </div>
    );
};

export default AppliedJobs;