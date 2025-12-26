interface RecruiterJobsProps{
    showMyJobs: boolean;
}

const RecruiterJobs = ({showMyJobs}: RecruiterJobsProps) => {
    return (
        showMyJobs && <div>Recruiter Jobs</div>
    )
}

export default RecruiterJobs;