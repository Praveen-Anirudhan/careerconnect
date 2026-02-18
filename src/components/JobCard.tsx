import { MapPin, DollarSign } from 'lucide-react';
import {useNavigate} from 'react-router-dom';

interface Job {
  title: string;
  job_type?: string;
  location: string;
  salary_range?: string;
  id: string;
}

const JobCard = ({ getJob }: { getJob: Job }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{getJob?.title}</h3>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
          {getJob?.job_type}
        </span>
      </div>

      {/* Job Details */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{getJob?.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <DollarSign size={16} />
          <span>{getJob?.salary_range}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3  mt-auto">
        <button className="flex-1 px-8 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium">
          View Details
        </button>
        <button
          className="flex-1 px-8 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors font-medium"
          onClick={() => navigate(`/candidate/application-form/${getJob.id}`)}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
