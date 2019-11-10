<template>
  <div id="app">
    <Map/>
    <Menu/>
  </div>
</template>

<script>
import Map from './components/Map.vue';
import Menu from './components/Menu.vue';


export default {
  name: 'app',
  components: {
    Map,
    Menu
  }
}
</script>

<style>
/* @font-face {
  font-family: "GillSans";
  src: url("assets/fonts/GillSans.ttc") format("ttc");
}
@font-face {
  font-family: "DIN Condensed Bold";
  src: url("assets/fonts/DIN Condensed Bold.ttf") format("ttf");
} */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  
}
</style>
