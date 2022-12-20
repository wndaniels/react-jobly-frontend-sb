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
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          name={search}
          placeholder="Type search here..."
          value={search}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
};

export default SearchForm;
