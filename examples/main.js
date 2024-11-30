import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import demo from "../components/demo";
import demo1 from "../components/demo1";
Vue.component("demo", demo);
Vue.component("demo1", demo1);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
