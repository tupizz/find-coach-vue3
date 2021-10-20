import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from "@/views/coaches/CoachDetail.vue";
import ListCoach from "@/views/coaches/ListCoach.vue";
import CoachRegister from "@/views/coaches/CoachRegister.vue";
import ContactCoach from "@/views/requests/ContactCoach.vue";
import RequestsReceived from "@/views/requests/RequestsReceived.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    path: "/coaches",
    name: "List coaches",
    component: ListCoach,
  },
  {
    path: "/coaches/:id",
    component: CoachDetail,
    props: true,
    children: [{ path: "contact", component: ContactCoach }],
  },
  {
    path: "/register",
    component: CoachRegister,
  },
  {
    path: "/requests",
    component: RequestsReceived,
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
