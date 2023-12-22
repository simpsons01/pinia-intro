import { createApp, computed } from "vue";
import { createPinia } from "pinia";
import router from "./router"
import App from "./App.vue";

const pinia = createPinia();

const app = createApp(App);

app.provide(
  "storeRegisterKey", 
  computed(() => Object.keys(pinia.state.value).join())
)

app.use(router)

app.use(pinia);

app.mount("#app");
