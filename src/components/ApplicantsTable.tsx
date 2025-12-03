export const ApplicantsTable = ({showApplicants}: {showApplicants: boolean}) => {

    const applicants = [
        {
            name: "John Doe",
            email: "john.doe@example.com",
            position: "Software Engineer",
            applied_date: "2022-01-01",
        }
    ]

    if(!showApplicants) return null;

    return(
        <div>
            <h1 className="font-bold text-3xl">Applicants</h1>
            <p className="text-gray-500">Review and manage job applications</p>

            <div className="overflow-x-auto py-8">
                <table className="border border-gray-200 rounded-lg border-collapse w-full p-4">
                    <thead className="border-b border-gray-400">
                    <tr className="">
                        <th className="text-left px-1 py-2">Name</th>
                        <th className="text-left">Email</th>
                        <th className="text-left">Position</th>
                        <th className="text-left">Applied Date</th>
                        <th className="text-left">Status</th>
                    </tr>
                    </thead>

                    <tbody>
                    {applicants.map((applicant, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            <td>{applicant.name}</td>
                            <td>{applicant.email}</td>
                            <td>{applicant.position}</td>
                            <td>{applicant.applied_date}</td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}
