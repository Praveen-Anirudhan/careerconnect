import LoginForm from '../../components/LoginForm';
import { Navigate, useParams } from 'react-router-dom';

const Login = () => {
  const { role } = useParams();
  if(!role) {
    return <Navigate to="/" replace />;
  }

  return <LoginForm role={role} />;
};

export default Login;
