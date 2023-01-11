import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import applyPrototypes from '@/helpers/applyPrototypes.js';

import App from '@/App.vue';
import '@/assets/main.css';



// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const app = createApp(App);
applyPrototypes(app.config.globalProperties);
app.use(createPinia());
app.mount('#app');