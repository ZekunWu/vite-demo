import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/styles/main.less';
import router from '@/router';
import store from '@/store';
import { init } from '@/init';
const app = createApp(App);
init(app);

app.use(store).use(router).mount('#app');
