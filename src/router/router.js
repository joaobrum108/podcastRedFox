import { createRouter, createWebHistory } from "vue-router";
import mobile from "../components/mobile.vue";
import QuemSomos from "../components/QuemSomos.vue";
import Home from "../components/home.vue";
import intro from "../components/intro.vue";

const routes = [
  {
    path: "/",
    name: "indro",
    component: intro,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Podcast",
    name: "Mobile",
    component: mobile,
  },
  {
    path: "/quemsomos",
    name: "QuemSomos",
    component: QuemSomos,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
