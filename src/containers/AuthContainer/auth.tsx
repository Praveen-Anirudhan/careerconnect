import {type ReactNode} from 'react';
import { AuthProvider } from '../../context/AuthContext';

export const AuthContainer = ({ children }: { children: ReactNode }) => {
    return <AuthProvider>{children}</AuthProvider>;
};