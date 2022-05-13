import { createRouter, createWebHistory } from "vue-router";
import TodoView from "@/views/TodoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: TodoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
