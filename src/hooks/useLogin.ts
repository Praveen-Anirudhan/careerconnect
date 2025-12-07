import { useAuth } from "../hooks/useAuth";
import { loginUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (email: string, password: string) => {
        const { token } = await loginUser({ email, password });
        login(token);
        navigate('/recruiter/dashboard', { replace: true });
    };

    return { handleLogin };
};
