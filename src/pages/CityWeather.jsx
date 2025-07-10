import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCurrentWeather, fetchForecast } from "../api/axios";
import Weather from "../components/Weather";
import Forecast from "../components/Forecast";

export default function CityWeather() {
  const { cityName } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const city = cityName || "Vadodara";

  useEffect(() => {
    const getData = async () => {
      try {
        const weatherData = await fetchCurrentWeather(city);
        const forecastData = await fetchForecast(city);
        setWeatherData(weatherData);
        setForecast(forecastData);
        setLoading(false);
      } catch (error) {
        setError("City not found or API error.");
        setLoading(false);
      }
    };
    getData();
  }, [city]);city

  if (loading) return <p>Loading...</p>;
  if (error) return <p>City Not Found</p>;

  return (
    <div className="container">
      {weatherData && <Weather data={weatherData} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}
