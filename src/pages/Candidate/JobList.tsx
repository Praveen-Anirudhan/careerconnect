import { useState } from 'react';
import JobCard from '../../components/JobCard';
import { filteredJobs } from '../../utils/filterJobs';
import type { Job } from '../../mockData/jobs';
import jobs from '../../mockData/jobs';
import { SearchBar } from '../../components/SearchBar';

const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedJobType, setSelectedJobType] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

  const locationData = [
    'Remote',
    'San Francisco, CA',
    'New York, NY',
    'Austin, TX',
    'Seattle, WA',
  ];

  const handleJobTypeChange = (type: string) => {
    setSelectedJobType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  const filteredJobsList = filteredJobs({
    searchQuery,
    locationQuery,
    selectedJobType,
    selectedLocation,
  });

  const hasActiveFilters =
    searchQuery ||
    locationQuery ||
    selectedJobType.length > 0 ||
    selectedLocation.length > 0;

  const jobsCount = hasActiveFilters ? filteredJobsList.length : jobs.length;
  const showNoJobsMessage = jobsCount === 0;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Browse All Jobs
        </h1>

        {/* Search Bar */}
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          locationQuery={locationQuery}
          setLocationQuery={setLocationQuery}
        />

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Job Type</h3>
                <div className="space-y-2">
                  {['Full-time', 'Part-time', 'Contract', 'Internship'].map(
                    (type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedJobType.includes(type)}
                          onChange={() => handleJobTypeChange(type)}
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-700">{type}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Location</h3>
                <div className="space-y-2">
                  {locationData.map((location) => (
                    <label
                      key={location}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedLocation.includes(location)}
                        onChange={() => handleLocationChange(location)}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{location}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Jobs Grid */}

          <div className="flex-1">
            {showNoJobsMessage ? (
              <p className="text-gray-600">No jobs found</p>
            ) : (
              <p className="text-gray-600 mb-6">
                Showing {jobsCount} {hasActiveFilters ? 'filtered ' : ''}jobs
              </p>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredJobs({
                searchQuery,
                locationQuery,
                selectedJobType,
                selectedLocation,
              }).map((job: Job, index: number) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
