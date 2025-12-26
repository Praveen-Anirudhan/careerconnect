import {type ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import {Briefcase, CirclePlus, File, LogOut, Users} from "lucide-react";
import {removeAuthToken} from "../services/tokenService.ts";

interface SideBarProps{
    onApplicantsClick? : () => void;
    onDashboardClick? : () => void;
    onPostJobClick?: () => void;
    onMyJobsClick?: () => void;
}

interface MenuItem{
    icon: ReactNode;
    label: string;
}

const SideBar = ({ onApplicantsClick, onDashboardClick, onPostJobClick, onMyJobsClick }: SideBarProps) => {
    const navigate = useNavigate();
    const menuItems = [
        { icon: <Briefcase size={24} />, label: "Dashboard" },
        { icon: <File size={24} />, label: "My Jobs" },
        { icon: <Users size={24} />, label: "Applicants" },
    ];

    const handleLogout = () => {
        removeAuthToken();
        navigate('/');
    }

    const onClick = ({label}: MenuItem) => {
        if(label === "Dashboard"){
            onDashboardClick?.();
        }else if(label === "Applicants"){
            onApplicantsClick?.();
        }else if(label === "My Jobs"){
            onMyJobsClick?.();
        }
    }

    return(
        <div className="bg-gray-50 h-screen w-72 border-r border-gray-200 flex flex-col">
            <div className="flex flex-row items-center gap-2 mx-6 py-8">
                <Briefcase className="text-cyan-600" size={32}/>
                <p className="text-2xl font-bold">CareerConnect</p>
            </div>


            <div className="mx-6 flex flex-col gap-4">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => onClick(item)}
                        className="flex flex-row items-center gap-6 px-4 hover:bg-gray-100 rounded-lg py-2">
                        {item.icon}
                        <p>{item.label}</p>
                    </div>
                ))}

                <button
                    type="button"
                    onClick = {onPostJobClick}
                    className="bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition mt-6 w-full flex flex-row justify-center items-center gap-4">
                    <CirclePlus size={24}/>
                    Post New Job
                </button>
            </div>

            <div className="flex flex-row items-center gap-2 m-6 hover:bg-gray-100 mt-auto py-4 rounded-lg px-4 border-t border-gray-300">
                <LogOut className="text-cyan-600" size={24}/>
                <button className="cursor-pointer" onClick={handleLogout}>Logout</button>
            </div>

        </div>
    )
}

export default SideBar;