import {Navigate, createBrowserRouter, RouterProvider} from "react-router-dom";
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
import Dashboard from "../pages/Recruiter/Dashboard";
import type {JSX} from "react";
import {useAuth} from "../hooks/useAuth.ts";
import SignUp from "../pages/Recruiter/SignUp";

export default function AppRouter() {

    const router = createBrowserRouter([
            {
                errorElement: <NotFound />,
                children: [
                    { path: "/", element: <Home/> },
                    { path: "/jobs", element : <JobList/> },
                    { path: "/jobs/:id", element : <JobDetails/> },
                    { path: "/apply/:id", element : <ApplyJob/> },
                    { path: "/applications", element : <MyApplications/> },
                    { path: "/recruiter/login", element: <Login/>},
                    { path: "/recruiter/signup", element: <SignUp/>},
                    { path: "/recruiter/dashboard", element: <RecruiterDashboard/>},
                    { path: "/recruiter/post", element: <PostJob/>},
                    { path: "/recruiter/applicants/:jobId", element: <Applicants/>},
                    {
                        path: "/recruiter/dashboard",
                        element: (
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        )
                    },
                ],
            }
        ])

    return <RouterProvider router={router} />
}

function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/" replace />;
}

