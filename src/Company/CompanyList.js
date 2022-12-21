import { useEffect, useState } from "react";
import SearchForm from "../Common/SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api/api";
import LoadingIcon from "../Common/LoadingIcon";

const CompanyList = () => {
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnLoad() {
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <LoadingIcon />;

  return (
    <div>
      <SearchForm searchFor={search} />
      <div className="CompanyList col-md-8 offset-md-2">
        {companies.length ? (
          <div className="CompanyList-list">
            {companies.map((c) => (
              <CompanyCard
                key={c.handle}
                handle={c.handle}
                name={c.name}
                description={c.description}
                logoUrl={c.logoUrl}
              />
            ))}
          </div>
        ) : (
          <p className="lead">Sorry, no results were found!</p>
        )}
        <CompanyCard />
      </div>
    </div>
  );
};

export default CompanyList;
