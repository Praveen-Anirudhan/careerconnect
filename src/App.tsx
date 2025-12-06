import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./hooks/useAuth";
import Login from "./pages/Recruiter/Login";
import Dashboard from "./pages/Recruiter/Dashboard";
import Home from "./pages/Home/Home";

import "./styles/global.css";
import {type JSX} from "react";

function App() {
    return (
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
    );
}

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recruiter/login" element={<Login />} />

            <Route
                path="/recruiter/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default App;
