import {useNavigate} from 'react-router-dom';
import {removeAuthToken} from "../services/tokenService";
import SideBar from "../components/SideBar";

type Props = {
    activeView: 'dashboard' | 'applicants' | 'postjob' | 'myjobs';
    setActiveView: (view: 'dashboard' | 'applicants' | 'postjob' | 'myjobs') => void;
};

const SideBarContainer = ({ setActiveView}: Props) => {

    const navigate = useNavigate();

    const handleLogout = () => {
        removeAuthToken();
        navigate('/');
    }

    const handleDashboardClick = () => {
        setActiveView("dashboard")
    }

    const onMyJobsClick = () => {
        setActiveView("myjobs")
    }

    const onApplicantsClick = () => {
        setActiveView("applicants")
    }

    const onPostJobClick = () => {
        setActiveView("postjob")
    }

    return (
        <SideBar
            onLogout={handleLogout}
            onDashboardClick={handleDashboardClick}
            onMyJobsClick={onMyJobsClick}
            onApplicantsClick={onApplicantsClick}
            onPostJobClick={onPostJobClick}
        />
    )
}

export default SideBarContainer;