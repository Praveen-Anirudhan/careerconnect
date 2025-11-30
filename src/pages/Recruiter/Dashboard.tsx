import {useState} from 'react';
import SideBar from "../../components/SideBar.tsx";
import {JobDetailsForm} from '../../components/JobDetailsForm.tsx'

const Dashboard = () => {
    const [showJobDetailsForm, setShowJobDetailsForm] = useState(false);

    return(
        <div className="flex">
            <SideBar onPostJobClick={() => setShowJobDetailsForm(true)} />
            {showJobDetailsForm && <JobDetailsForm/> }
        </div>
    )
}

export default Dashboard;