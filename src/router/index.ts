import { createRouter, createWebHistory } from "vue-router";
import technicalManager from "./technicalManager";

const routes = [...technicalManager];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router