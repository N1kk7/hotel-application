import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { setupCalendar } from 'v-calendar';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(setupCalendar, {});
app.mount('#app');
