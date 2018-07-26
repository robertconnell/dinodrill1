import React from 'react';
import Job from './Job';

function returnJobs(jobs) {
    return jobs.map(job => {
        return <Job key={job.id} data={job}/>
    })
}

const JobList = (props) =>
{return (<section>
<h2>Job Listings</h2>
<ul id="job-listings">
    {returnJobs(props.jobArray)}
</ul>
</section>)}

export default JobList;