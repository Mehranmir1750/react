import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return alert("Please enter a city");

    const apiKey = "e6042f43fa38d7644f90677daa0b3d3a";

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      const data = await res.json();

      if (data.cod !== 200) {
        alert("City not found!");
        return;
      }

      setWeather(data);

    } catch (err) {
      alert("Something went wrong. Check your internet connection.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App 🌦️</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && getWeather()}
      />

      <button onClick={getWeather}>Search</button>

      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <h3>{weather.main.temp} °C</h3>
          <p>{weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;