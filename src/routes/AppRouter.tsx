import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import JobList from "../pages/Candidate/JobList";
import JobDetails from "../pages/Candidate/JobDetails";
import ApplyJob from "../pages/Candidate/ApplyJob";
import MyApplications from "../pages/Candidate/MyApplications";
import RecruiterDashboard from "../pages/Recruiter/Dashboard";
import PostJob from "../pages/Recruiter/PostJob";
import Applicants from "../pages/Recruiter/Applicants";
import Login from "../pages/Recruiter/Login";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/Recruiter/SignUp";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/apply/:id" element={<ApplyJob />} />
            <Route path="/applications" element={<MyApplications />} />

            <Route path="/recruiter/login" element={<Login />} />
            <Route path="/recruiter/signup" element={<SignUp />} />
            <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
            <Route path="/recruiter/post" element={<PostJob />} />
            <Route path="/recruiter/applicants/:jobId" element={<Applicants />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
