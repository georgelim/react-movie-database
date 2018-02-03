import {fetchJobs} from '../api/jobs'

export const RECEIVE_JOBS = 'RECEIVE_JOBS';

export const receiveJobs = (jobs) => {

    console.log('jobs', jobs);
    return ({
        type: RECEIVE_JOBS,
        jobs
    });
};
