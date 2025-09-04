import React from "react";

const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };

  const sortCountries = (value) => {
    const sorted = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sorted);
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
        className="filter-control"
      />

      <button onClick={() => sortCountries("asc")} className="filter-control">
        Asc
      </button>
      <button onClick={() => sortCountries("desc")} className="filter-control">
        Desc
      </button>

      <select
        value={filter}
        onChange={handleSelectChange}
        className="filter-control"
      >
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default SearchFilter;