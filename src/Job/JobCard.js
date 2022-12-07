const JobCard = () => {
  return (
    <div>
      <p>{job.title}</p>
      <p>{job.company}</p>
      <p>{job.salary}</p>
      <p>{job.equity}</p>
      <button type="submit">Apply : Applied</button>
    </div>
  );
};

export default JobCard;
