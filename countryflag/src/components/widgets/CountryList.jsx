import React from "react";

const CountryList = ({ name, flag }) => (
  <div className="WorldList">
    <img src={flag} alt="Country Flag" />
    <p className="CountryName">{name}</p>
  </div>
);

export default CountryList;
