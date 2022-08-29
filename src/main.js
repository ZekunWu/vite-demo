import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import '@/assets/styles/main.less';
import { init } from '@/init';

const app = createApp(App);
init();

app.use(createPinia()).mount('#app');
