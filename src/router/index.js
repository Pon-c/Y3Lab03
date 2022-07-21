import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import AboutView from "../views/AboutView.vue";
import OrgListView from "../views/OrgListView.vue";

const routes = [
  {
    path: "/",
    name: "EventListView",
    component: EventListView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/org",
    name: "orgcard",
    component: OrgListView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
