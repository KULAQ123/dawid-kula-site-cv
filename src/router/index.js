import { createRouter, createWebHistory, RouterView } from "vue-router";
import Tr from "@/i18n/translation";

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
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "privacy-policy",
          name: "privacyPolicy",
          component: () => import("../views/PrivacyPolicyView.vue"),
        },
        {
          path: "examples",
          name: "examples",
          component: () => import("../views/ExamplesView.vue"),
        },
      ],
    },
  ],
});
export default router;
