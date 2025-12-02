import {useState} from 'react';
import SideBar from "../../components/SideBar.tsx";
import {JobDetailsForm} from '../../components/JobDetailsForm.tsx'
import DashboardView from "../../components/DashboardView.tsx";
import {ApplicantsTable} from "../../components/ApplicantsTable.tsx";


const Dashboard = () => {
    const [activeView, setActiveView] = useState<'dashboard' | 'applicants'>('dashboard');
    const [showJobDetailsForm, setShowJobDetailsForm] = useState(false);

    return(

        <div className="flex w-screen h-screen overflow-hidden">
            <SideBar
                onPostJobClick={() => setShowJobDetailsForm(true)}
                onApplicantsClick={() => setActiveView("applicants")}
                onDashboardClick={() => setActiveView("dashboard")}
            />

            <div className="w-3/4 overflow-y-auto p-6">
                {showJobDetailsForm && <JobDetailsForm/> }
                {activeView === "dashboard" && <DashboardView showDashboard={true}/>}
                {activeView === "applicants" && <ApplicantsTable showApplicants={true}/>}
            </div>
        </div>
    )
}

export default Dashboard;