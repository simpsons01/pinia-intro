import { createApp } from "vue";
import { createPinia } from "pinia";
import { customPlugin } from "./store/plugin";
import App from "./App.vue";

const pinia = createPinia();

pinia.use(customPlugin);

const app = createApp(App);

app.use(pinia);

app.mount("#app");
