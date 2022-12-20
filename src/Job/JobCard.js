import React, { useContext, useState } from "react";
import UserContext from "../Auth/UserContext";

const JobCard = ({ id, title, salary, equity, companyName }) => {
  const { appliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();

  React.useEffect(
    function updateAppliedStatus() {
      setApplied(appliedToJob(id));
    },
    [id, appliedToJob]
  );

  async function handleApply(evt) {
    if (appliedToJob(id)) return;
    applyToJob(id);
    setApplied(true);
  }

  return (
    <div>
      {applied}
      <div>
        <h6>{title}</h6>
        <p>{companyName}</p>
        {salary && (
          <div>
            <small>Salary: {salary}</small>
          </div>
        )}
        {equity && (
          <div>
            <small>Equity: {equity}</small>
          </div>
        )}
        <button onClick={handleApply} disabled={applied}>
          {applied ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
};

export default JobCard;
