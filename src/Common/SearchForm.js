import { useState } from "react";
import { Form } from "react-router-dom";

const SearchForm = ({ searchFor }) => {
  const [search, setSearch] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(search.trim() || undefined);
    setSearch(search.trim());
  }

  function handleChange(evt) {
    setSearch(evt.target.value);
  }

  return (
    <div className="SearchForm mb-4">
      <Form className="row g-3 align-items-center" onSubmit={handleSubmit}>
        <div className="col-7 offset-md-2">
          <input
            className="form-control"
            name={search}
            placeholder="Type search here..."
            value={search}
            onChange={handleChange}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-sm btn-primary" type="submit">
            Search
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
