import JobCard from "./JobCard";

function JobCardList({ jobs, apply }) {
  console.debug("JobCardList", "jobs=", jobs);

  return (
    <div className="JobCardList">
      <div className="d-grid gap-3">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            companyName={job.companyName}
          />
        ))}
      </div>
    </div>
  );
}
export default JobCardList;
