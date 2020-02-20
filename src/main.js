import Vue from 'vue';
import VueFirestore from 'vue-firestore';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueFirestore);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
