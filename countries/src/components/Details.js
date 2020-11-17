import React from "react";
import Weather from "./Weather";

const countryFullData = (countries) => {
  return countries.map((item) => (
    <React.Fragment key={`${item.iso639_1}-${item.name}`}>
      <h2>{item.name}</h2>
      <p>Capital: {item.capital}</p>
      <p>Population: {item.population}</p>
      {item.languages && (
        <>
          <p>Languages:</p>
          <ul>
            {item.languages.map((item) => (
              <li key={`${item.iso639_1}-${item.name}`}>{item.name}</li>
            ))}
          </ul>
          <img width="100" src={item.flag} alt={item.name} />
        </>
      )}
      {<Weather capital={item.capital} country={item.name}/>}
    </React.Fragment>
  ));
};

function Details({ countries, onButtonClick}) {

    const handleShowClick = (item) => {
      if (onButtonClick) onButtonClick(item);
    }
    

  const showCountries = (countries) => {
    const countryArrayLength = countries.length;
    if (countryArrayLength === 1) return countryFullData(countries);
    if (countryArrayLength > 10) return <p>To many matches, specify another filter.</p>;
    if (countryArrayLength === 0) return <p>No results found.</p>;
    return countryList(countries);
  };

  const countryList = (countries) => {
    return countries.map((item) => (
      <h3 key={`${item.iso639_1}-${item.name}`}>
        {item.name}
        <button onClick={handleShowClick.bind(null, item.name)}>Show</button>
      </h3>
    ));
  };

  return showCountries(countries);
}

export default Details;