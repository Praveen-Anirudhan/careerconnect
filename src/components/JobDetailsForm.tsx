import {TextInput, TextArea} from './JobDetails.tsx'
import {newJob, newJobDetails} from '../constants/constants.ts'

export const JobDetailsForm = () => {
    return (
        <div>
            <h1>{newJob}</h1>
            <p>{newJobDetails}</p>
            <TextInput label="Job Title" placeholder="Enter job title"/>
            <TextArea label="Job Description" placeholder="Enter job description"/>
        </div>
    );
};
