import { createApp } from 'vue'
import App from './App.vue'
import axios from './api/http';
import router from "./router";

const app = createApp(App);

app.config.productionTip = false;



app.provide('$http', axios);

app.use(router);

app.mount('#app');


