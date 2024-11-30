import Vue from 'vue'
import App from './App.vue'
import fontAnimation from "../components/fontAnimation.vue";
Vue.component("fontAnimation", fontAnimation);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
