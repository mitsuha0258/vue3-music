import { createApp } from 'vue'
import App from './App.vue'

import router from "@/router";
import store from "@/store";

import Icon from "@/components/common/Icon";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Icon);
app.mount('#app');
