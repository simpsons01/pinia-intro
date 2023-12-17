import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);

app.provide("isTodayDateEven", new Date().getDate() % 2 === 0)

app.mount("#app");
