import { createRouter, createWebHistory, RouterView } from "vue-router";
import Tr from "@/i18n/translation";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
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
      ],
    },
  ],
});
export default router;
