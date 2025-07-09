import React from "react";

function WeatherCard({ data }) {
  const { city, temperature, condition, icon, isDay } = data;

  const cardBg = isDay ? "bg-white" : "bg-gray-800";
  const textColor = isDay ? "text-gray-800" : "text-white";
  const shadow = isDay ? "shadow-md" : "shadow-lg";

  return (
    <div
      className={`${cardBg} ${shadow} rounded-2xl p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl`}
    >
      <div className="text-5xl mb-2">{icon}</div>
      <h2 className={`text-xl font-semibold mb-1 ${textColor}`}>{city}</h2>
      <p className={`text-sm mb-2 ${isDay ? "text-gray-600" : "text-gray-300"}`}>
        {condition}
      </p>
      <p className="text-3xl font-bold text-blue-500">{temperature}°C</p>
    </div>
  );
}

export default WeatherCard;
