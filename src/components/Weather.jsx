import React from "react";

export default function Weather({ data }) {
  return (
    <div className="current-weather">
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p>{Math.round(data.main.temp)}°C</p>
    </div>
  );
}
