import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(faSpaceAwesome);

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);

app.mount("#app");
