import { useEffect, useState } from "react";
import SearchForm from "../Common/SearchForm";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";
import LoadingIcon from "../Common/LoadingIcon";

const JobList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(function getAllJobs() {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <LoadingIcon />;

  return (
    <div>
      <SearchForm searchFor={search} />
      <div className="JobList col-md-8 offset-md-2">
        {jobs.length ? (
          <JobCardList jobs={jobs} />
        ) : (
          <p className="lead">Sorry, no results were found!</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
