import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";

import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "Add",
    component: Add,
    path: "/add-restaurant",
  },
  {
    name: "Update",
    component: Update,
    path: "/update-restaurant/:id",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
