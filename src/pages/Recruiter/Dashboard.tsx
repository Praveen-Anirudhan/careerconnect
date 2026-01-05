import { useState } from 'react';
import { JobDetailsForm } from '../../components/JobDetailsForm';
import DashboardView from '../../components/DashboardView';
import { ApplicantsTable } from '../../components/ApplicantsTable';
import RecruiterJobs from '../../components/RecruiterJobs';
import SideBarContainer from '../../containers/SideBar';

const Dashboard = () => {
  const [activeView, setActiveView] = useState<
    'dashboard' | 'applicants' | 'postjob' | 'myjobs'
  >('dashboard');
  const [showJobDetailsForm, setShowJobDetailsForm] = useState(false);

  const handleViewChange = (
    view: 'dashboard' | 'applicants' | 'postjob' | 'myjobs'
  ) => {
    setActiveView(view);
    setShowJobDetailsForm(view === 'postjob');
  };

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <SideBarContainer
        activeView={activeView}
        setActiveView={handleViewChange}
      />

      <div className="w-3/4 overflow-y-auto p-6">
        {showJobDetailsForm && activeView === 'postjob' && <JobDetailsForm />}
        {activeView === 'dashboard' && <DashboardView showDashboard={true} />}
        {activeView === 'applicants' && (
          <ApplicantsTable showApplicants={true} />
        )}
        {activeView === 'myjobs' && <RecruiterJobs showMyJobs={true} />}
      </div>
    </div>
  );
};

export default Dashboard;
