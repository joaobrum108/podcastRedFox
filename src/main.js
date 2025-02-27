import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { createPinia } from "pinia";
import "./css/bulma.css";
import App from "./App.vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const pinia = createPinia();
const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});

app.use(pinia);
app.use(vuetify);
app.mount("#app");
