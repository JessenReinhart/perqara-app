import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import Home from "./pages/Home.vue";
import Movies from "./pages/Movies.vue";

import "./index.css";

const routes = [{ path: "/", component: Home },{ path: "/movies", component: Movies }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
