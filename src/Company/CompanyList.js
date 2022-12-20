import { useEffect, useState } from "react";
import SearchForm from "../Common/SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api/api";

const CompanyList = () => {
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnLoad() {
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return;

  return (
    <div>
      <SearchForm searchFor={search} />
      {companies.length ? (
        <div>
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
  );
};

export default CompanyList;
