const TOKEN_KEY = 'auth_token';
const AUTH_FLAG = 'isAuthenticated';
const USER_ROLE = 'user_role';

export const setAuthToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(AUTH_FLAG, 'true');
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeAuthToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(AUTH_FLAG);
  localStorage.removeItem(USER_ROLE);
};

export const isAuthenticated = () => {
  return (
    localStorage.getItem(AUTH_FLAG) === 'true' &&
    !!localStorage.getItem(TOKEN_KEY)
  );
};

export const setUserRole = (role: string) => {
  localStorage.setItem(USER_ROLE, role);
};

export const getUserRole = () => {
  return localStorage.getItem(USER_ROLE);
};

export const removeUserRole = () => {
  localStorage.removeItem(USER_ROLE);
};
