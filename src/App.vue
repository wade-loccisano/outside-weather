<template>
  <div id="app">
    <weather-page></weather-page>
  </div>
</template>

<script>
import WeatherPage from './components/WeatherPage.vue'

export default {
  name: 'App',
  components: {
    WeatherPage
  }
}
</script>

<style>
#app {
  font-family: 'Merriweather', 'Helvetica', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
   height:100vh;
  background: url('assets/cool-background.png') no-repeat center center fixed;
  background-color: #ee54549f;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
}
/* background: url('assets/cool-background.png') no-repeat center center fixed; */

@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');

</style>
