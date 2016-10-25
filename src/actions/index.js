import axios from 'axios';

const API_KEY = '3ecd8fd44b07ea411bdb6bfef166a91d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FEACH_WEATHER';

export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}