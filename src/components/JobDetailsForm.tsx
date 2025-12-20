import {useState} from 'react';
import {SelectInput, TextInput, TextArea} from './JobDetails.tsx'
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
} from '../constants/constants.ts'

export const JobDetailsForm = () => {

    const [jobTypeValue, setJobTypeValue] = useState('');
    const jobTypeOptions = ['Full-time', 'Part-time', 'Contract', 'Internship'];

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">{newJob}</h1>
                <p className="text-gray-500">{newJobDetails}</p>
            </div>

            <div className="flex flex-col gap-8 border-gray-400 border rounded-lg p-4 w-full">
                <h1 className="text-2xl font-bold">{jobDetails}</h1>
                <div className="grid grid-cols-2 gap-8">
                    <TextInput label={jobTitle} placeholder={jobTitlePlaceholder}/>
                    <TextInput label={companyName} placeholder={companyNamePlaceholder}/>
                    <TextInput label={location} placeholder={locationPlaceholder}/>
                    <SelectInput label={jobType} options={jobTypeOptions} value={jobTypeValue} onChange={setJobTypeValue}/>
                    <TextInput label={salaryRange} placeholder={salaryRangePlaceholder}/>
                </div>
                <div className="space-y-6">
                    <TextArea label={jobDescription} placeholder={jobDescriptionPlaceholder}/>
                    <TextArea label={requirements} placeholder={requirementsPlaceholder}/>
                    <TextArea label={responsibilities} placeholder={responsibilitiesPlaceholder}/>
                </div>

                <div className="flex flex-row gap-4">
                    <button className="bg-gray-400 text-white py-3 rounded-lg hover:bg-gray-500 transition w-1/3">{cancelButton}</button>
                    <button className="bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition w-full">{submitButton}</button>
                </div>
            </div>
        </div>
    );
};
