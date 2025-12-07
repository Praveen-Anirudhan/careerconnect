import { graphqlRequest } from "../utils/api";
import { setAuthToken } from "./tokenService";
import { LOGIN_MUTATION, REGISTER_MUTATION } from "./api";
import type { RegisterInput, RegisterResponse, LoginInput, LoginResponse } from "../types/authTypes";

export const register = async ({ email, password, role }: RegisterInput) => {
    const result = await graphqlRequest<RegisterInput, RegisterResponse>({
        query: REGISTER_MUTATION,
        variables: { email, password, role },
    });

    if (result.errors) {
        throw new Error(result.errors[0]?.message || "Registration failed");
    }

    if (result.data?.register?.token) {
        setAuthToken(result.data.register.token);
        return result.data.register;
    }

    throw new Error("Registration failed: No token received");
};

export const loginUser = async ({ email, password }: LoginInput) => {
    const result = await graphqlRequest<LoginInput, LoginResponse>({
        query: LOGIN_MUTATION,
        variables: { email, password },
    });

    if (result.errors) {
        throw new Error(result.errors[0]?.message || "Login failed");
    }

    if (result.data?.login?.token) {
        setAuthToken(result.data.login.token);
        return result.data.login;
    }

    throw new Error("Login failed: No token received");
};
