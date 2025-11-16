import type {ReactNode} from "react";
import {Briefcase, FileText, Users} from "lucide-react";

const DashboardView = () => {

interface DashboardCardProps {
     title: string;
     icon: string | ReactNode;
     count: number;
}

const DashboardCards = [
     {
        title: "Active Jobs",
        icon: <Briefcase/>,
        count: 0
     },
     {
        title: "Total Applicants",
        icon: <Users/>,
        count: 0
     },
     {
        title: "New Applicants",
        icon: <FileText/>,
        count: 0
     }]

    const RecentActivity = [
        {
            title: "New Applicant",
            role: "Software Engineer",
            time: "2 hours ago"
        },
        {
            title: "Job Post Published",
            role: "Software Engineer",
            time: "3 hours ago"
        }
    ]

    const DashboardDetails = ({title, icon, count}: DashboardCardProps) => {
        return (
            <div>
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <p className="text-gray-500">{title}</p>
                        <p className="font-bold text-2xl">{count}</p>
                    </div>
                    <p className="text-cyan-600 rounded-lg">{icon}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="p-10">

            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-4xl">Dashboard</h1>
                <p className="text-gray-500 text-center text-xl">Welcome back! Here's an overview of your recruitment activity</p>
            </div>

            <div className="flex flex-row gap-2 p-2">
                {DashboardCards.map((card, index) => (
                    <div className="border-gray-400 border-1 rounded-lg w-1/3">
                        <DashboardDetails
                            key={index}
                            title={card.title}
                            count={card.count}
                            icon={card.icon}
                        />
                    </div>
                ))}
            </div>

            {/*Data is hardcoded for now*/}
            <div>
                <h1 className="">Recent Activity</h1>
                {RecentActivity.map((activity, index) => (
                    <div key={index}>
                        <p>{activity.title}</p>
                        <p>{activity.role}</p>
                        <p>{activity.time}</p>
                    </div>
                ))}

            </div>
       </div>
    );
};

export default DashboardView;
