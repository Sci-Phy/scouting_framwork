import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Analysis from "../views/Analysis.vue";
import Teams from "../views/Teams.vue";
import NotFound from "../views/NotFound.vue";
import Fields from "../views/Fields.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/form",
    name: "Form",
    component: Fields
  },
  {
    path: "/analysis",
    name: "Analysis",
    component: Analysis
  },
  {
    path: "/teams",
    name: "TeamsAll",
    component: Teams
  },
  {
    path: "/teams/:id",
    name: "Teams",
    component: Teams
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.resolve({
  name: "not-found",
  params: { pathMatch: ["not", "found"] }
}).href; // '/not/found'

export default router;
