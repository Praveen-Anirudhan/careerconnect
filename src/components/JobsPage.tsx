import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";
import JobCard from "./JobCard";
import jobs from "../data/jobs";

const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedJobType, setSelectedJobType] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation =
      locationQuery === "" ||
      job.location.toLowerCase().includes(locationQuery.toLowerCase());
    const matchesJobType =
      selectedJobType.length === 0 || selectedJobType.includes(job.type);
    const matchesLocationFilter =
      selectedLocation.length === 0 ||
      selectedLocation.some((loc) => job.location.includes(loc));

    return (
      matchesSearch &&
      matchesLocation &&
      matchesJobType &&
      matchesLocationFilter
    );
  });

  const toggle = (value: string, setFn: React.Dispatch<React.SetStateAction<string[]>>) => {
    setFn((prev: string[]) =>
        prev.includes(value)
            ? prev.filter(item => item !== value)
            : [...prev, value]
    );
  };

  const handleJobTypeChange = (type: string) => toggle(type, setSelectedJobType);
  const handleLocationChange = (loc: string) => toggle(loc, setSelectedLocation);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Browse All Jobs
        </h1>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Job title, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg">
              <MapPin className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="City or remote"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                className="flex-1 outline-none text-sm"
              />
            </div>
            <button className="bg-cyan-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-cyan-700 transition-colors flex items-center justify-center gap-2">
              <Search className="h-5 w-5" />
              Search Jobs
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Job Type</h3>
                <div className="space-y-2">
                  {["Full-time", "Part-time", "Contract", "Internship"].map(
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
                  {[
                    "Remote",
                    "San Francisco, CA",
                    "New York, NY",
                    "Austin, TX",
                    "Seattle, WA",
                  ].map((location) => (
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
            <p className="text-gray-600 mb-6">
              Showing {filteredJobs.length} jobs
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredJobs.map((job, index) => (
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
