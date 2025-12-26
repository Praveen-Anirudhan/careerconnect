import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {removeAuthToken} from "../services/tokenService";
import SideBar from "../components/SideBar";

const SideBarContainer = () => {

    const [activeView, setActiveView] = useState('dashboard')
    const navigate = useNavigate();

    const handleLogout = () => {
        removeAuthToken();
        navigate('/');
    }

    const handleDashboardClick = () => {
        setActiveView('dashboard');
    }

    const

    return (
        <SideBar
            onLogout={handleLogout}
            onDashboardClick={() => handleDashboardClick}
            onMyJobsClick={() => navigate('/my-jobs')}
            onApplicantsClick={() => navigate('/applicants')}
            onPostJobClick={() => navigate('/post-job')}
        />
    )
}

export default SideBarContainer;