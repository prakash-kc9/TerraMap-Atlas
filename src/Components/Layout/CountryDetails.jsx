import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getIndvisualCountryData } from "../../API/postApi";
import { Loader } from "../UI/Loader";
import "./CountryDetails.css"; // import CSS

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndvisualCountryData(params.id);

      if (res.status === 200) {
        // API returns array → take first object
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending || !country) return <Loader />;

  return (
    <section className="country-details container">
      {/* Flag */}
      <div className="flag-box">
        <img
          src={country.flags.svg}
          alt={country.flags.alt || country.name.common}
        />
      </div>

      {/* Details */}
      <div className="details-box">
        <h1>{country.name.official}</h1>
        <p>
          <strong>Native Name:</strong>{" "}
          {Object.values(country.name.nativeName || {})[0]?.common || "N/A"}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Sub Region:</strong> {country.subregion}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>
        <p>
          <strong>Top Level Domain:</strong> {country.tld?.[0] || "N/A"}
        </p>
        <p>
          <strong>Currencies:</strong>{" "}
          {country.currencies
            ? Object.values(country.currencies)
                .map((c) => c.name)
                .join(", ")
            : "N/A"}
        </p>
        <p>
          <strong>Languages:</strong>{" "}
          {country.languages
            ? Object.values(country.languages).join(", ")
            : "N/A"}
        </p>
      </div>
      <NavLink to="/country" className="go-back-btn">
        <button>Go Back</button>
      </NavLink>
    </section>
  );
};

export default CountryDetails;
