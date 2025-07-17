import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";


const cities = ["London", "New York", "Delhi", "Paris", "Tokyo", "Moscow"];


const API_KEY = "0d0fecd941254152395194d8d25e9649";


function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const promises = cities.map((city) =>
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
          )
          .then((res) => ({
            city: res.data.name,
            temperature: Math.round(res.data.main.temp),
            condition: res.data.weather[0].main,
            icon: getWeatherIcon(res.data.weather[0].main),
            isDay: res.data.weather[0].icon.includes("d"),
          }))
          .catch((err) => {
            console.error("Error fetching weather for", city, err);
            return null;
          })
      );

      const results = await Promise.all(promises);
      const filtered = results.filter((item) => item !== null);
      setWeatherData(filtered);

      
      console.log("Weather data fetched:", filtered);
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "clouds":
        return "☁️";
      case "rain":
        return "🌧️";
      case "clear":
        return "☀️";
      case "snow":
        return "❄️";
      case "mist":
      case "haze":
      case "fog":
        return "🌫️";
      case "thunderstorm":
        return "⛈️";
      default:
        return "🌡️";
    }
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {weatherData.map((data, index) => (
        <WeatherCard key={index} data={data} />
      ))}
    </div>
  );
}

export default WeatherDashboard;
