import { createApp } from 'vue'
import 'ant-design-vue/dist/antd.css'
import '@/style.css'
import router from './router/index'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
