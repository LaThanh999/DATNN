import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: () => import("../views/FullPage"),
    children: [
      {
        path: "/Login",
        name: "Login",
        component: () => import("../views/auth/Login"),
      },
      {
        path: "/Registration",
        name: "Registration",
        component: () => import("../views/auth/Registration"),
      },
    ],
  },
  {
    path: "",
    component: () => import("../views/Layout"),
    children: [
      {
        path: "/Home",
        name: "Home",
        component: () => import("../views/Home"),
      },
      {
        path: "/Detail",
        name: "Detail",
        component: () => import("../views/Detail"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
