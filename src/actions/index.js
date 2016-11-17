import axios from 'axios';
const API_KEY = 'b809003d60d27663b5263b56bcdae43a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //returns a promise.
    return {
    type: FETCH_WEATHER,
    payload: request  //promise is send to the payload.
  };
}
