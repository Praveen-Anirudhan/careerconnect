import { useState } from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { SelectInput, TextInput, TextArea } from './JobDetails.tsx';
import {
  cancelButton,
  submitButton,
  newJob,
  newJobDetails,
  jobDetails,
  jobTitle,
  jobTitlePlaceholder,
  companyName,
  companyNamePlaceholder,
  location,
  locationPlaceholder,
  salaryRange,
  salaryRangePlaceholder,
  jobDescription,
  jobDescriptionPlaceholder,
  requirements,
  requirementsPlaceholder,
  responsibilities,
  responsibilitiesPlaceholder,
  jobType,
} from '../constants/constants.ts';
import { postJobRequest } from '../redux/features/job/jobSlice';
import { JobType } from '../redux/features/job/types.ts';

export const JobDetailsForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    job_type: JobType.FULL_TIME,
    salary_range: '',
    job_description: '',
    requirements: '',
    responsibilities: '',
    skills: '',
    posted_by: '',
    created_at: '',
  });
  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const isFormValid = () => {
    return (
      form.title.trim() !== '' &&
      form.company.trim() !== '' &&
      form.location !== '' &&
      form.salary_range.trim() !== '' &&
      form.job_description.trim() !== '' &&
      form.requirements.trim() !== '' &&
      form.responsibilities.trim() !== ''
    );
  };

  const resetForm = () => {
    setForm({
      title: '',
      company: '',
      location: '',
      job_type: JobType.FULL_TIME,
      salary_range: '',
      job_description: '',
      requirements: '',
      responsibilities: '',
      skills: '',
      posted_by: '',
      created_at: '',
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">{newJob}</h1>
        <p className="text-gray-500">{newJobDetails}</p>
      </div>

      <div className="flex flex-col gap-8 border-gray-400 border rounded-lg p-4 w-full">
        <h1 className="text-2xl font-bold">{jobDetails}</h1>
        <div className="grid grid-cols-2 gap-8">
          <TextInput
            label={jobTitle}
            placeholder={jobTitlePlaceholder}
            value={form.title}
            onChange={(e) => handleChange('title', e.target.value)}
          />
          <TextInput
            label={companyName}
            placeholder={companyNamePlaceholder}
            value={form.company}
            onChange={(e) => handleChange('company', e.target.value)}
          />
          <TextInput
            label={location}
            placeholder={locationPlaceholder}
            value={form.location}
            onChange={(e) => handleChange('location', e.target.value)}
          />
          <SelectInput
            label={jobType}
            options={[
              { value: JobType.FULL_TIME, label: 'Full-time' },
              { value: JobType.PART_TIME, label: 'Part-time' },
              { value: JobType.CONTRACT, label: 'Contract' },
              { value: JobType.INTERNSHIP, label: 'Internship' },
            ]}
            value={form.job_type}
            onChange={(value) => handleChange('job_type', value as JobType)}
          />
          <TextInput
            label={salaryRange}
            placeholder={salaryRangePlaceholder}
            value={form.salary_range}
            onChange={(e) => handleChange('salary_range', e.target.value)}
          />
        </div>
        <div className="space-y-6">
          <TextArea
            label={jobDescription}
            placeholder={jobDescriptionPlaceholder}
            value={form.job_description}
            onChange={(e) => handleChange('job_description', e.target.value)}
          />
          <TextArea
            label={requirements}
            placeholder={requirementsPlaceholder}
            value={form.requirements}
            onChange={(e) => handleChange('requirements', e.target.value)}
          />
          <TextArea
            label={responsibilities}
            placeholder={responsibilitiesPlaceholder}
            value={form.responsibilities}
            onChange={(e) => handleChange('responsibilities', e.target.value)}
          />
        </div>

        <div className="flex flex-row gap-4">
          <button className="bg-gray-400 text-white py-3 rounded-lg hover:bg-gray-500 transition w-1/3">
            {cancelButton}
          </button>
          <button
            disabled={!isFormValid()}
            onClick={() => {
              dispatch(postJobRequest(form));
              resetForm();
            }}
            className={clsx(
              'py-3 rounded-lg transition w-full',
              isFormValid()
                ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                : 'bg-gray-400 text-white cursor-not-allowed'
            )}
          >
            {submitButton}
          </button>
        </div>
      </div>
    </div>
  );
};
