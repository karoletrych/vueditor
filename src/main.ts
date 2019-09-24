import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';
import { scan } from '@/core/scanComponents';

Vue.use(KeenUI);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
