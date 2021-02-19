import axios from 'axios';

const http = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather?zip=16117,us&appid="
});

export default {
    
    getWeather() {
        return http.get();
    },

}