export const fetchJobs = (gender = null, location = null, salary = null, age) => (
    fetch('/data/jobs.js', {
        method: 'get'
    }).then((response) => {
        let jobs = response.json();

        if (gender)
            jobs = jobs.filter(j => j.genderMf === gender);

        if (location)
            jobs = jobs.filter(j => j.location === location);

        if (salary) {
            jobs = jobs.filter(j => {
                try {
                    const mySalary = parseInt(j.salary);

                    return mySalary >= salary;
                } catch (error) {
                    return true
                }
            });
        }

        if (age)
            jobs = jobs.filter(j => j.ageLevel === age);


        return jobs;
    })
);

// export const fetchUser = (username) => (
//     fetch(`/data/users/${username}.json`, {
//         method: 'get'
//     }).then((response) => response.json())
// );
