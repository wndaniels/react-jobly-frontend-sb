import { useEffect, useState } from "react";
import SearchForm from "../Common/SearchForm";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";

const JobList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(function getAllJobs() {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return;

  return (
    <div>
      <SearchForm searchFor={search} />
      {jobs.length ? (
        <JobCardList jobs={jobs} />
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </div>
  );
};

export default JobList;
