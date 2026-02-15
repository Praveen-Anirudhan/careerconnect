import JobCard from './JobCard';
import jobs from '../mockData/jobs';

const JobsPage = () => {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {jobs.map((job, index) => (
          <JobCard key={index} getJob={job} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
          View All Jobs
        </button>
      </div>
    </div>
  );
};

export default JobsPage;
