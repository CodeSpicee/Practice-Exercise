import React from "react";
import NavBar from "./components/layout/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import CountryList from "./components/widgets/CountryList";

const App = () => {
  const [myCountries, setCountries] = useState([]);

  useEffect(() => {
    axios("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then(({ data }) => setCountries(data.data))
      .catch((err) => console.error({ err }));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="CountryDisplay">
        {myCountries.map((country, countryIndex) => (
          <CountryList
            flag={country.flag}
            name={country.name}
            key={countryIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
