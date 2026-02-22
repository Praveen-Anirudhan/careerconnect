import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextInput } from './JobDetails';
import { useDispatch } from 'react-redux';
import { applyJobRequest } from '../redux/features/applyJob/applyJobSlice';

const ApplicationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jobId } = useParams<{ jobId: string }>();

  const [formData, setFormData] = useState({
    jobId: jobId,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevState) => ({
        ...prevState,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phoneNumber;

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-8"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-800">Job Application</h1>
          <p className="text-sm text-zinc-500">
            Please fill in your details below
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput
            label="First Name"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange('firstName')}
          />

          <TextInput
            label="Last Name"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange('lastName')}
          />

          <TextInput
            label="Email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange('email')}
          />

          <TextInput
            label="Mobile Number"
            placeholder="9876543210"
            value={formData.phoneNumber}
            onChange={handleChange('phoneNumber')}
          />
        </div>

        <div className="flex flex-row gap-3">
          <button
            type="submit"
            className="mt-4 w-full bg-cyan-600 text-white py-3 rounded-xl
                     font-medium hover:bg-cyan-700 transition
                     disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => navigate('/jobs')}
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!isFormValid}
            className="mt-4 w-full bg-cyan-600 text-white py-3 rounded-xl
                     font-medium hover:bg-cyan-700 transition
                     disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => dispatch(applyJobRequest({...formData, jobId: jobId!}))}
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
