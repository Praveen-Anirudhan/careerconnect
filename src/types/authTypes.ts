export type RegisterInput = {
    email: string;
    password: string;
    role: "RECRUITER";
};

export type RegisterResponse = {
    data?: {
        register: {
            token: string;
            user: {
                id: string;
            };
        };
    };
    errors?: Array<{ message: string }>;
};

export type LoginInput = {
    email: string;
    password: string;
};

export type LoginResponse = {
    data?: {
        login: {
            token: string;
            user: {
                id: string;
            };
        };
    };
    errors?: Array<{ message: string }>;
};
