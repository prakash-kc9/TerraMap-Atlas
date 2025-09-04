import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// Fetches a list of all countries with specific fields.
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// Fetches detailed data for a single country by its name.
export const getIndvisualCountryData = (name) => {
  return api.get(`name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
};