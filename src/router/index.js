import Vue from "vue";
import VueRouter from "vue-router";
import infosPersos from "../views/infosPersos.vue";
import parcours from "../views/parcours.vue";
import dossierCandidature from "../views/dossierCandidature.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Infos Persos",
    component: infosPersos,
  },
  {
    path: "/coordonneesparents",
    name: "Coordonnées parents",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/coorPar.vue"),
  },
  {
    path: "/parcours",
    name: "Parcours",
    component: parcours,
  },
  {
    path: "/dossierCandidature",
    name: "dossierCandidature",
    component: dossierCandidature,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
