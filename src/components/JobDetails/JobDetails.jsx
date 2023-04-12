import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Details from '../Details/Details';

const JobDetails = () => {

    const details = useLoaderData();
    // console.log(details);

    const {jobId}  = useParams();
    console.log(jobId);

    const [data, setData] = useState({});
    useEffect(() => {
        const selectData = details.find((item) => item.id == jobId);
        setData(selectData)
        // console.log(selectData);
    },[])
    
    console.log(data);


    return (
      <div>
        <Details key={data.id} data={data}></Details>
      </div>
    );
};

export default JobDetails;