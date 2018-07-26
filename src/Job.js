import React from 'react';

const Job = (props) =>
    <li>
        <h4>{props.data.title}</h4>
        <small>{props.data.pay}</small>
        <p>{props.data.description}</p>
        <small>{props.data.interested.length} dinos are interested in this job</small>
    </li>

export default Job;