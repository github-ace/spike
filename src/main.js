import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/base.css';

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
