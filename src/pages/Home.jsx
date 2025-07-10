import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import ThemeChange from "../components/ThemeChange";
import { fetchCurrentWeather, fetchForecast } from "../api/axios";
import Weather from "../components/Weather";
import Forecast from "../components/Forecast";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCitySearch = async (cityName) => {
    setLoading(true);
    setError("");
    setForecastData("");
    setWeatherData("");
    try {
      const weather = await fetchCurrentWeather(cityName);
      const forecast = await fetchForecast(cityName);
      setWeatherData(weather);
      setForecastData(forecast);
    } catch (err) {
      setError("City not found.");
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleCitySearch("Vadodara");
  }, []);

  return (
    <>
      <ThemeChange />
      <div className="container">
        <h1>Weather App</h1>
        <Search onSearch={handleCitySearch} />
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {weatherData && <Weather data={weatherData} />}
        {forecastData && <Forecast data={forecastData} />}
      </div>
    </>
  );
}
