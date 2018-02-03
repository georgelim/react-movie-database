export const fetchJobs = () => (
    fetch('/data/jobs.js', {
        method: 'get'
    }).then((response) => response.json())
  )