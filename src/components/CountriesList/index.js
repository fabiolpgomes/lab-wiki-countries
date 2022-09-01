//Exibe a lista de links com os nomes dos países - CountriesList component
import axios from "axios";
import { useState, useEffect } from "react";
import { link } from 'react-router-dom' ;

function CountriesList (){
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        console.log("dentro do useEffect, fora da função fetchRecipes");
        async function fetchCountries() {
            const response = await axios.get("https://ih-countries-api.herokuapp.com/countries");
            console.log(response.data);
            setCountries(response.data);
        } 
      
          fetchCountries();
        }, []);

    // [] => não depende de ninguém, roda quando o componente é renderizado
  // [state] => quando esse state for atualizado, tudo que está dentro do useEffect vai rodar novamente.
        
  
    return (
        <div div className="container">
            <div className="row"> 
            {countries.map((countries) => {
                return (
                    <CountriesList 
                        key={countries.}
                    />
                )
            })}
        </div>
        </div>
    )
}
export default CountriesList