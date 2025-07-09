import React from "react";
import WeatherDashboard from "./components/WeatherDashboard";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
}

export default App;
