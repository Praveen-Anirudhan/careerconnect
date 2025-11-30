import {useState} from 'react';
import SideBar from "../../components/SideBar.tsx";
import {TextInput} from '../../components/JobDetailsForm.tsx'

const Dashboard = () => {
    const [showJobDetailsForm, setShowJobDetailsForm] = useState(false);

    return(
        <div className="flex">
            <SideBar onPostJobClick={() => setShowJobDetailsForm(true)}/>
            {showJobDetailsForm && <TextInput label={"test"} placeholder={"enter your name"}/>}
        </div>
    )
}

export default Dashboard;