import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home.vue';
import Test from '@/views/test.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
