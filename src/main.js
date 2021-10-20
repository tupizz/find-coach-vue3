import { createApp } from "vue";

import App from "./App.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .component("base-card", BaseCard)
  .component("base-button", BaseButton)
  .component("base-badge", BaseBadge)
  .mount("#app");
