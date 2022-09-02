import './App.css';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {
  const [ countries, setCountries] = useEffect([]);

  useEffect(() => {
    async function fetchCountries() {
      const response = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(response.data);
    }
    fetchCountries();
  }, []);
     
  return (
    <div className="App">
      <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
              <Routes>
               <Route
                path="/:countryAlpha3Code"
                element={<CountryDetails countries={countries} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      );   
}

export default App;


