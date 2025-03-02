import { createRouter, createWebHistory } from 'vue-router';
import mobile from '../components/mobile.vue';
import QuemSomos from '../components/QuemSomos.vue';
const routes = [
  {
    path: '/',
    name: 'mobile',
    component: mobile
  },
  {
    path: '/about',
    name: 'QuemSomos',
    component: QuemSomos
  }
 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
