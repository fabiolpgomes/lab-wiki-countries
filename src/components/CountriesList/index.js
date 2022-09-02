//Exibe a lista de links com os nomes dos países - CountriesList component
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CountriesList({ countries }) {
  const [search, setSearch] = useState('');

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        <div className="input-group mt-1 mb-2">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={search}
            onChange={handleChange}
          />
        </div>

        {countries
          .filter((country) => {
            return (
              country.name.common
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              country.alpha3Code.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((country) => {
            return (
              <Link
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
                key={country.alpha3Code}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="Flag"
                  width={40}
                  className="mb-1"
                />
                <h6>{country.name.common}</h6>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default CountriesList;