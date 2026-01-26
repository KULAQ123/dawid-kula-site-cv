import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      alias: ["/o-mnie", "/home", "/start"],
    },
    {
      path: "/privacy-policy",
      name: "privacyPolicy",
      component: () => import("../views/PrivacyPolicyView.vue"),
      alias: ["/polityka-prywatnosci", "/polityka", "/prywatnosci"],
    },
    {
      path: "/examples",
      name: "examples",
      component: () => import("../views/ExamplesView.vue"),
      alias: ["/przyklady", "/portfolio", "/strony"],
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
      alias: ["/uslugi", "/oferta", "/lista"],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
