import React, { useState } from "react";
import "bulma/css/bulma.css";
import "./index.css";

const SearchHeader = ({ search }) => {
  const [valueInput, setValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit} className="searchMainGroup">
      <label className="labelSearch">What are you looking for?</label>
      <div className="searchGroup">
        <input
          className="input is-primary"
          type="text"
          placeholder="Write Here"
          value={valueInput}
          onChange={handleChange}
        />
        <button className="button is-primary">Search</button>
      </div>
    </form>
  );
};

export default SearchHeader;
