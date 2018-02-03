import {fetchJobs} from '../api/jobs'

export const RECEIVE_JOBS = 'RECEIVE_JOBS';

export const receiveJobs = (jobs) => ({
    type: RECEIVE_JOBS,
    jobs
});
