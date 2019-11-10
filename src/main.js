import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueParallaxJs from 'vue-parallax-js'



Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA_liIIp8STHRX04LMo6uUWcsoFPsPooGw',
  },
})
Vue.use(VueParallaxJs)

new Vue({
  render: h => h(App),
}).$mount('#app')
