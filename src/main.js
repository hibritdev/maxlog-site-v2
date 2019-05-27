import Vue from 'vue'
import Vuetify from 'vuetify'
import Home from './Home.vue'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import './assets/css/global.css'

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken4, // blue
    secondary: colors.yellow.darken1, // yellow
    // primary: colors.red.accent3,
    // secondary: '#FDD2A4',
    // accent: '#D8EBF1',
    // info: '#5B5C79',
  },
  iconfont: 'mdi'
})


new Vue({
  el: '#app',
  components: { Home },
  template: '<Home/>'
})
