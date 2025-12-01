import {useState} from 'react';
import SideBar from "../../components/SideBar.tsx";
import {JobDetailsForm} from '../../components/JobDetailsForm.tsx'

const Dashboard = () => {
    const [showJobDetailsForm, setShowJobDetailsForm] = useState(false);

    return(
        <div className="flex w-screen h-screen overflow-hidden">
            <SideBar onPostJobClick={() => setShowJobDetailsForm(true)} />
            <div className="w-3/4 overflow-y-auto p-6">
                {showJobDetailsForm && <JobDetailsForm/> }
            </div>
        </div>
    )
}

export default Dashboard;