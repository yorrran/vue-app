// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from "vue2-google-maps";


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCAg7oQkHj2RYstohYmXAbFSHWNnPiGzaE",
    libraries: "places" // necessary for places input
  }
});


Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  components: { App, GoogleMap },
  template: '<App/>'
})*/
new Vue({
  router,               // Add this line
  render: h => h(App)
}).$mount('#app')

