import Vue from "vue";
import VueRouter from "vue-router";
import TopPage from "../views/TopPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TopPage",
    component: TopPage,
  },
  {
    path: "/usertop",
    name: "UserTop",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),

    // @ is an alias to /src
    component: () => import("@/views/UserTop.vue"),
  },
];

const router = new VueRouter({
  mode: "history", //ページのリロード無しにURL遷移を実現するhttps://v3.router.vuejs.org/ja/guide/essentials/history-mode.html
  base: process.env.BASE_URL, //サブディレクトリ(ベースURL)を指定
  routes,
});

export default router;
