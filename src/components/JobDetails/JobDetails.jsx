import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Details from '../Details/Details';

const JobDetails = () => {

  const hendleAddToJob = (id) => {
    console.log("hendleAddToJob  cliker", id);
  }

    const details = useLoaderData();
    const {jobId}  = useParams();

    const [data, setData] = useState({});
  useEffect(() => {
    const selectData = details.find((item) => item.id == jobId);
    setData(selectData)
        
  }, []);


    return (
      <div>
        <Details
          key={data.id}
          data={data}
          hendleAddToJob={hendleAddToJob}
        ></Details>
      </div>
    );
};

export default JobDetails;