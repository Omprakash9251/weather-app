import React from "react";

export default function Forecast({ data }) {
  const dailyData = data.list.filter((reading) =>
    reading.dt_txt.includes("12:00:00")
  );
  console.log(data)

  return (
    <div className="forecast">
      {dailyData.map((day) => (
        <div key={day.dt} className="forecast-day">
          <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>{Math.round(day.main.temp)}°C</p>
          <p>{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}
