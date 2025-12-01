export const ApplicantsTable = ({showApplicants}: {showApplicants: boolean}) => {
    return(
        <div>
            {showApplicants && <p>Applicants Table</p>}
        </div>
    )
}
