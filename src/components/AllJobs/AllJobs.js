

import React, { useState } from 'react';
import './AllJobs.css'; 

const AllJobs = () => {
  
  const allJobs =  [  
    {
    id: 1,
    title: 'Data Scientist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, augue id interdum bibendum, arcu neque auctor tellus.',
  },
  {
    id: 2,
    title: 'Software Engineer',
    description: 'Sed tempus odio sit amet quam euismod, ut eleifend ligula gravida. Nulla facilisi.',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    description: 'Fusce euismod velit vel ullamcorper tempus. In quis mauris ut tortor congue scelerisque vel nec quam.',
  },
  {
    id: 4,
    title: 'Backend Developer',
    description: 'Proin tristique felis id velit feugiat, et interdum neque feugiat. Curabitur finibus tellus sit amet dolor dignissim.',
  },
   
    {
      id: 5,
      title: 'UI/UX Designer',
      description: 'Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.',
    },
    {
      id: 6,
      title: 'Product Manager',
      description: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
    },
    {
      id: 7,
      title: 'Data Analyst',
      description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
      
    },
  ];
 
  

  
  const [appliedJobs, setAppliedJobs] = useState([]);

  
  const [showAllJobs, setShowAllJobs] = useState(false);

  const handleApplyClick = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      
      alert('Successfully Applied!');
    }
  };

  return (
    <div className="all-jobs-section">
      {showAllJobs ? (
        <>
          <h1>All Jobs</h1>
          <div className="jobs-list">
            {allJobs.map((job) => (
              <div key={job.id} className="job-item">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <button onClick={() => handleApplyClick(job.id)}>Apply</button>
              </div>
            ))}
          </div>
          <button onClick={() => setShowAllJobs(false)}>Back</button>
        </>
      ) : (
        <>
          <h1>Featured Jobs</h1>
          <div className="jobs-list">
           
            {allJobs.slice(0, 3).map((job) => (
              <div key={job.id} className="job-item">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <button onClick={() => handleApplyClick(job.id)}>Apply</button>
              </div>
            ))}
          </div>
          <button onClick={() => setShowAllJobs(true)}>Show All Jobs</button>
        </>
      )}
    </div>
  );
};

export default AllJobs;
