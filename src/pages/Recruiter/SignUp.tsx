import SignUp from '../../components/SignUp';
import { Navigate, useParams } from 'react-router-dom';

const SignUpPage = () => {
    const { role } = useParams();
    if(!role) {
      return <Navigate to="/" replace />;
    }
    
    return <SignUp role={role} />;
}

export default SignUpPage;
