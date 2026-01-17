import { useSelector } from 'react-redux';
import { jobsSelector } from '../redux/features/job/selector';
import LoadingPage from './LoadingPage';

interface RecruiterJobsProps {
  showMyJobs: boolean;
}

const RecruiterJobs = ({ showMyJobs }: RecruiterJobsProps) => {
  const { getJob, getJobLoading } = useSelector(jobsSelector);

  if (getJobLoading) return <LoadingPage />;

  return (
    showMyJobs &&
    getJob && (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getJob.map((job) => (
          <div
            key={job?.id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {job?.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{job?.location}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {job?.job_type}
              </span>

              <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {job?.salary_range}
              </span>
            </div>
            <button className="mt-4 text-sm text-cyan-600 font-medium hover:underline">
              View Details →
            </button>
          </div>
        ))}
      </div>
    )
  );
};

export default RecruiterJobs;
