import SideBar from "../../components/SideBar.tsx";
import DashboardView from "../../components/DashboardView.tsx";

const Dashboard = () => {
    return(
        <div className="flex flex-row">
            <SideBar/>
            <DashboardView/>
        </div>
    )
}

export default Dashboard;