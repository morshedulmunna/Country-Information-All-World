import { useEffect, useState } from "react";
import "./App.css";
import CountryList from "./Componet/CountryList/CountryList";

function App() {
  const [country, setCountry] = useState([]);
  // console.log(country);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div className="country">
      {country.map((cp) => (
        <CountryList country={cp} key={cp.alpha2Code}></CountryList>
      ))}
    </div>
  );
}

export default App;
