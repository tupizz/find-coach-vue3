import { createApp } from "vue";

// General Font
import "vfonts/Lato.css";

import App from "./App.vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import router from "./router";
import store from "./store";
import naive from "./naive";

createApp(App)
  .use(store)
  .use(router)
  .use(naive)
  .component("base-card", BaseCard)
  .component("base-button", BaseButton)
  .component("base-badge", BaseBadge)
  .mount("#app");
