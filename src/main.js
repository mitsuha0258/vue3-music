import { createApp } from 'vue'
import App from './App.vue'

import router from "@/router";
import store from "@/store";

import Icon from "@/components/common/Icon";

//统一接口api文件夹里面全部请求函数
import * as API from '@/api';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Icon);
// 注册全局属性
app.config.globalProperties.$API=API;
app.mount('#app');
