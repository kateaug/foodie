<template>
  <div id="app">
    <Hero/>
    <Community/>
    <Map/>
    <Menu/>
    <Footer/>

  </div>
</template>

<script>
import Hero from './components/Hero.vue';
import Community from './components/Community.vue';
import Map from './components/Map.vue';
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default {
  name: 'app',
  created () {
    AOS.init()
  },
  components: {
    Hero,
    Community,
    Map,
    Menu,
    Footer
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: "GillSans";
  src: url("~@/assets/fonts/GillSans.ttf") format('ttf');
}
@font-face {
    font-family: 'DIN Condensed Bold';
    font-style: normal;
    font-weight: normal;
    src: url("~@/assets/fonts/DINCondensedBold.ttf") format('ttf')
}


html,
  body
  {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    max-width: 100%;
  }
    

  body {
     max-width: 1920px;
     box-sizing: border-box;
  }
   
  p,
  a,
  h1,
  h2,
  h3,
  h4 {
    padding: 0;
    margin: 0;
  }

  button:focus {outline:0;}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
