import type {ReactNode} from "react";
import {Briefcase, FileText, Users} from "lucide-react";

interface DashboardCardProps {
    title: string;
    icon: ReactNode;
    count: number;
}

interface DashboardViewProps {
    showDashboard: boolean;
}

const DashboardCards: DashboardCardProps[] = [
    { title: "Active Jobs", icon: <Briefcase/>, count: 0 },
    { title: "Total Applicants", icon: <Users/>, count: 0 },
    { title: "New Applicants", icon: <FileText/>, count: 0 },
];

interface ActivityProps {
    title: string;
    role: string;
    time: string;
}

const RecentActivity: ActivityProps[] = [
    { title: "New Applicant", role: "Software Engineer", time: "2 hours ago" },
    { title: "Job Post Published", role: "Software Engineer", time: "3 hours ago" },
];

const DashboardDetails = ({title, icon, count}: DashboardCardProps) => (
    <div className="flex justify-between items-center w-full">
        <div>
            <p className="text-gray-500">{title}</p>
            <p className="font-bold text-2xl">{count}</p>
        </div>
        <p className="text-cyan-600 rounded-full p-3 bg-cyan-100">{icon}</p>
    </div>
);

const RecentActivityItem = ({title, role, time}: ActivityProps) => (
    <div className="flex justify-between pt-10 pb-2 border-b border-gray-200">
        <div className="flex flex-col">
            <p className="font-bold text-xl">{title}</p>
            <p className="text-gray-500">{role}</p>
        </div>
        <p className="text-gray-500">{time}</p>
    </div>
);

const DashboardView = ({showDashboard}: DashboardViewProps) => {
    if (!showDashboard) return null;

    return (
    <div className="p-10 w-full flex flex-col gap-10">

        <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl">Dashboard</h1>
            <p className="text-gray-500 text-xl">Welcome back! Here's an overview of your recruitment activity</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full">
            {DashboardCards.map(card => (
                <div key={card.title} className="border border-gray-400 rounded-lg p-6 flex-1 whitespace-nowrap">
                    <DashboardDetails {...card} />
                </div>
            ))}
        </div>

        <div className="rounded-xl border border-gray-400 p-6">
            <h1 className="font-bold text-2xl">Recent Activity</h1>
            {RecentActivity.map(activity => (
                <RecentActivityItem key={activity?.title} {...activity} />
            ))}
        </div>
    </div>
    )
}

export default DashboardView;
