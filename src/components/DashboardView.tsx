import type {ReactNode} from "react";

const DashboardView = () => {
    console.log("data");

interface DashboardCardProps {
     title: string;
     icon: string | ReactNode;
     count: number;
}

const DashboardCards = [
     {
        title: "Active Jobs",
        icon: "",
        count: 0
     },
     {
        title: "Total Applicants",
        icon: "",
        count: 0
     },
     {
        title: "New Applicants",
        icon: "",
        count: 0
     }
     ]

    const DashboardDetails = ({title, icon, count}: DashboardCardProps) => {
        return (
            <div>
                <div>
                    <p>{title}</p>
                    <p>{icon}</p>
                    <p>{count}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's an overview of your recruitment activity</p>

            <div>
                {DashboardCards.map((card, index) => (
                    <DashboardDetails
                        key={index}
                        title={card.title}
                        icon={card.icon}
                        count={card.count}
                    />
                ))}
            <div>
                </div>
            </div>
        </div>
    );
};

export default DashboardView;
