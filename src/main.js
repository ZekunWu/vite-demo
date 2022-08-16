import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import '@/assets/styles/main.less';
import router from '@/router';
import { init } from '@/init';

const app = createApp(App);
init();

app.use(createPinia()).use(router).mount('#app');
