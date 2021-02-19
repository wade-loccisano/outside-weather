<template>
  <div class="main-weather px-5" align="center">
    <h1>Weather conditions outside my house</h1>
    <div class="container center" v-if="this.isLoaded">
      <b-card
        no-body
        tag="article"
        style="max-width: 20rem"
        class="mt-2 weather-card"
      >
      <b-card-img :src="require(`../assets/icons/${this.currentWeather.weather[0].icon}.png`)" alt="Image" top 
      :class="{ white: isWhite, blue: isBlue, yellow: isYellow, red: isRed }"></b-card-img>
      <b-card-body>
           <b-card-title>{{getTemp + '° ' + this.selected}}</b-card-title>
        <b-list-group flush>
          <b-list-group-item>
            <div>
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio-group
                  id="radio-group-1"
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="radio-options"
                >
                  <b-form-radio value="C">Celsius</b-form-radio>
                  <b-form-radio value="F">Fahrenheit</b-form-radio>
                  <b-form-radio value="K">Kelvin</b-form-radio>
                </b-form-radio-group>
              </b-form-group>
            </div>
          </b-list-group-item>
          <b-list-group-item>Current Conditions: {{ this.currentWeather.weather[0].main }}</b-list-group-item>
          <b-list-group-item><button @click="updateWeather">Update</button></b-list-group-item>
        </b-list-group>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import weatherService from "@/services/WeatherService";

export default {
  name: "weather-page",
  data() {
    return {
      isLoaded: false,
      currentWeather: [],
      selected: "F",
      isWhite: false,
      isBlue: false,
      isYellow: false,
      isRed: false
    };
  },
  methods: {
    updateWeather() {
        window.location.reload();
    },
  },
  computed: {
    getTemp() {
      let temp = this.currentWeather.main.temp;
      switch (this.selected) {
        case "C":
          temp = temp - 273.15;
          break;
        case "F":
          temp = temp * 9 / 5 - 459.67;
          break;
        default:
          break;
      }
      return temp.toFixed(1);
    },
    setImageColor() {
          const backgroundColor = document.querySelector('.card-img.top');
          backgroundColor.style.background = "blue";
          return null;
      }
  },
  mounted() {
    weatherService
      .getWeather()
      .then((response) => {
        this.currentWeather = response.data;
        let temp = this.currentWeather.main.temp;
        if (temp < 274) {
            this.isWhite = true;
        } else if (temp < 289) {
            this.isBlue = true;
        } else if (temp < 305) {
            this.isYellow = true;
        } else {
            this.isRed = true;
        }
        this.isLoaded = true;
      })
      .catch((err) => {
        console.error(err + " - Unable to grab weather data at this time!");
      });
  },
  created() {
  },
};
</script>

<style>
.card-img-top {
  max-height: 25vh;
}
.white {
    background-color: #C4FAF8;
}
.blue {
    background-color: #6EB5FF;
}
.yellow {
    background-color: #FFFFD1;
}
.red {
    background-color: #FFABAB;
}
</style>