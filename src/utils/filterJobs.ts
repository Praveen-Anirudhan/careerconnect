import jobs from '../mockData/jobs';

interface FilterParams {
  searchQuery: string;
  locationQuery: string;
  selectedJobType: string[];
  selectedLocation: string[];
}

export const filteredJobs = ({
  searchQuery,
  locationQuery,
  selectedJobType,
  selectedLocation,
}: FilterParams) => {
  return jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation =
      locationQuery === '' ||
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
};
