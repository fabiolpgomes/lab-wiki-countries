// componente que vamos renderizar via react-router-dom's Route, e deve receber o código do país ( alpha3Code) via URL.
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountryDetails ({ countries }) {
    const { countryAlpha3Code } = useParams();
    const [ country, setContry] = useState({});
    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        async function fetchCountry() {
            const response = await axios.get (
                `https://ih-countries-api.herokuapp.com/countries/${countryAlpha3Code}`);
            
            setContry(response.data);
            setLoading(false);
        }  
        fetchCountry();
       }, [countryAlpha3Code]);

    function findFullName(border) {
        const fullName = countries.filter((country) => {
            return country.alpha3Code === border;
        });

        console.log(fullName);

        return fullName[0].name.commom;
        }    

        return (
            <>
                {!loading && (
        <div className="col-7">
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt="Flag"
            width={120}
            className="mb-3"
          />
          <h1>{country.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td style={{ width: '30%' }}>Region</td>
                <td>
                  {country.region} - {country.subregion}
                </td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((border) => {
                      return (
                        <li>
                          <Link
                            className="list-group-item list-group-item-action"
                            to={`/${border}`}
                            key={border.alpha3Code}
                          >
                            {findFullName(border)}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default CountryDetails;




