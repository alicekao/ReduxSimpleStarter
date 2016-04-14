// Axios makes an AJAX request and returns a promise
import axios from 'axios';
const API_KEY = 'b933e88e55d99ed7cb4e46bd8869fd81';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// Modularize actions to link to reducer as well - DRY
export const FETCH_WEATHER = 'FETCH_WEATHER';

// Make an action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // If payload is a promise, redux promise pauses the action until req resolves so that payload is a resolved request that can be sent to reducers
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
