export interface User {
  id: string;
  token: string;
  role?: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  email: string | null;
  password: string | null;
  role: string | null;
  error: string | null;
}

export type RegisterInput = {
  email: string;
  password: string;
  role: string;
};

export type RegisterResponse = {
  data?: {
    register: {
      token: string;
      user: {
        id: string;
        role: string;
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
