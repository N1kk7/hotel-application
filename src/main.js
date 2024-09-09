// import { createApp } from 'vue';
// import { createPinia } from 'pinia';
// import App from './App.vue';
// import router from './router';
// // import store from './store';

// const pinia = createPinia();
// // const app = createApp(App);

// // app.use(pinia);
// // app.use(router);
// // app.mount('#app');

// createApp(App).use(pinia).use(router).mount('#app');

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
