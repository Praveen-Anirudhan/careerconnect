import { MapPin, DollarSign, Clock } from 'lucide-react';
// Remove this line - you don't need to import jobs in JobCard
// import job from '../data/jobs';

interface Job {
  title: string;
  type: string;
  company: string;
  description: string;
  location: string;
  salary: string;
  posted: string;
  skills: string[];
}

const JobCard = ({ job }: { job: Job }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
          {job.type}
        </span>
      </div>

      {/* Company */}
      <p className="text-gray-700 font-medium mb-3">{job.company}</p>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

      {/* Job Details */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <MapPin size={16} />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <DollarSign size={16} />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{job.posted}</span>
        </div>
      </div>

      {/* Skills/Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {job.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-md border border-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex-1 px-8 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium">
          View Details
        </button>
        <button className="flex-1 px-8 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors font-medium">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;