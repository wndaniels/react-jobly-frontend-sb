const CompanyCard = ({ company }) => {
  return (
    <div>
      <div>
        <p>{company.name}</p>
      </div>
      <p>{company.description}</p>
    </div>
  );
};

export default CompanyCard;
