import { createApp, computed } from "vue";
import router from "./router"
import App from "./App.vue";
import store from "./store"

const app = createApp(App)

app.use(store)

app.use(router)

app.provide(
  "storeRegisterKey", 
  computed(() => Object.keys(store.state).join())
)

app.mount("#app")
