// src/exercises/ex4.js
import axios from 'axios';

export const fetchData = async () => {
  const apiKey = '1db3cf629ed34b77854175aa24be064d';
  const city = 'Rennes';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const displayDataInDOM = async () => {
  try {
    const data = await fetchData();
    const container = document.createElement('div');
    container.id = 'weather-container';
    container.textContent = `Weather: ${data.weather[0].description}, Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C`;
    document.getElementById('paragraph-container').appendChild(container);
  } catch (error) {
    console.error('Error displaying data:', error);
  }
};

export const removeWeatherData = () => {
  const container = document.getElementById('weather-container');
  if (container) {
    container.remove();
  }
};

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', displayDataInDOM);
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('remove-paragraph-button');
    if (button) {
      button.addEventListener('click', removeWeatherData);
    }
  });
}
