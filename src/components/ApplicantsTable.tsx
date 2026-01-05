import { applicants } from '../data/applicants';
import { Eye, Download, Mail } from 'lucide-react';

export const ApplicantsTable = ({
  showApplicants,
}: {
  showApplicants: boolean;
}) => {
  if (!showApplicants) return null;

  return (
    <div>
      <h1 className="font-bold text-3xl">Applicants</h1>
      <p className="text-gray-500">Review and manage job applications</p>

      <div className="overflow-x-auto py-8">
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3">Name</th>
                <th className="text-left px-4">Email</th>
                <th className="text-left px-4">Position</th>
                <th className="text-left px-4">Applied Date</th>
                <th className="text-left px-4">Status</th>
                <th className="text-left px-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {applicants.map((applicant, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-4 py-3">{applicant.name}</td>
                  <td className="px-4">{applicant.email}</td>
                  <td className="px-4">{applicant.position}</td>
                  <td className="px-4">{applicant.applied_date}</td>
                  <td className="px-4">
                    <span
                      className={`
                      text-xs px-3 py-1 rounded-full
                      ${
                        applicant.status === 'new'
                          ? 'bg-cyan-600 text-white'
                          : applicant.status === 'reviewed'
                            ? 'bg-gray-200 text-gray-600'
                            : 'bg-blue-100 text-blue-700'
                      }
                    `}
                    >
                      {applicant.status}
                    </span>
                  </td>
                  <td className="px-4 flex gap-3 items-center py-3">
                    <button className="p-2 border rounded hover:bg-gray-100">
                      <Eye size={14} />
                    </button>

                    <button className="p-2 border rounded hover:bg-gray-100">
                      <Download size={14} />
                    </button>

                    <button className="p-2 border rounded hover:bg-gray-100">
                      <Mail size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
