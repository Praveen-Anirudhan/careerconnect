import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeAuthToken } from '../services/tokenService';
import SideBar from '../components/SideBar';
import { getJobRequest } from '../redux/features/job/jobSlice';

type Props = {
  activeView: 'dashboard' | 'applicants' | 'postjob' | 'myjobs';
  setActiveView: (
    view: 'dashboard' | 'applicants' | 'postjob' | 'myjobs'
  ) => void;
};

const SideBarContainer = ({ setActiveView }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    removeAuthToken();
    navigate('/');
  };

  const handleDashboardClick = () => {
    setActiveView('dashboard');
  };

  const onMyJobsClick = () => {
    setActiveView('myjobs');
    dispatch(getJobRequest());
  };

  const onApplicantsClick = () => {
    setActiveView('applicants');
  };

  const onPostJobClick = () => {
    setActiveView('postjob');
  };

  return (
    <SideBar
      onLogout={handleLogout}
      onDashboardClick={handleDashboardClick}
      onMyJobsClick={onMyJobsClick}
      onApplicantsClick={onApplicantsClick}
      onPostJobClick={onPostJobClick}
    />
  );
};

export default SideBarContainer;
