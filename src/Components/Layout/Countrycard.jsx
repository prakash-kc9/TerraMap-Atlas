import React from "react";
import { NavLink } from "react-router-dom";
import "./Countrycard.css";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  const displayName =
    name.common.length > 12 ? `${name.common.slice(0, 12)}...` : name.common;

  return (
    <li className="country-card">
      <img
        src={flags?.svg}
        alt={flags?.alt || name.common}
        className="flag-img"
      />
      <div className="card-content">
        <h2 className="country-name" title={name.common}>
          {displayName}
        </h2>

        <p>
          <strong className="inner-text">Population:</strong>{" "}
          {population.toLocaleString()}
        </p>
        <p>
          <strong className="inner-text">Region:</strong> {region}
        </p>
        <p>
          <strong className="inner-text">Capital:</strong>{" "}
          {capital?.length > 0 ? capital[0] : "N/A"}
        </p>

        <NavLink
          to={`/country/${name.common}`}
          className="read-more-btn"
          aria-label={`Read more about ${name.common}`}
        >
          Read More
        </NavLink>
      </div>
    </li>
  );
};

export default CountryCard;