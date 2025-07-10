import axios from 'axios';

const API_KEY = "dcab544c1269105cee82c353b63abf00";
const API_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = (city) => {
    return axios
        .get(`${API_URL}/weather`, {
            params: {
                q: city,
                appid: API_KEY,
            },
        })
        .then((res) => res.data);
};

export const fetchForecast = (city) => {
    return axios
        .get(`${API_URL}/forecast`, {
            params: {
                q: city,
                appid: API_KEY,
            },
        })
        .then((res) => res.data);
};
