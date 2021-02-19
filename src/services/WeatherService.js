import axios from 'axios';

const http = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather?zip=16117,us&appid=d964a2d4190c23afe0f06d6e0630134d"
});

export default {
    
    getWeather() {
        return http.get();
    },

}