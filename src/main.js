import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/common.css'

const app = createApp(App).use(router)
app.use(router).mount('#app')