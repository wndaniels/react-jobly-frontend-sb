import { Link } from "react-router-dom";

const CompanyCard = ({ name, description, logoUrl, handle }) => {
  return (
    <Link to={`/companies/${handle}`}>
      <div>
        <h6>
          {name}
          {logoUrl && <img src={logoUrl} alt={name} />}
        </h6>
        <p>
          <small>{description}</small>
        </p>
      </div>
    </Link>
  );
};

export default CompanyCard;
