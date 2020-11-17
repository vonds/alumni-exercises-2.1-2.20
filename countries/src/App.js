import React, { useState, useEffect } from 'react'
import Details from './components/Details'
import axios from 'axios'

function App() {
  const [ country, setCountry ] = useState('')
  const [ countries, setCountries ] = useState([])

  const handleCountryInput = e => setCountry(e.target.value)

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => setCountries(res.data))
      .catch(err => console.warn(err))
  }, [])

  const filteredCountries = () =>
  countries.filter(place =>
    place.name.toLowerCase().includes(country.toLowerCase())
  )

  const handleShowClick = (city) => {
    setCountry(city);
  }

  console.log(countries)

  return (
    <div className="App">
      <input 
        type="text"
        value={country}
        onChange={handleCountryInput}
      />
      <p>{country}</p>
      
      <Details 
        onButtonClick={handleShowClick}
        countries={filteredCountries()}
      />
    </div>
  );
}

export default App;
