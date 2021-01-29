import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Note from "@/views/Note.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
      path: "/note/:id",
      name: "Note",
      component: Note,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;