import './lib/ree.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.ts'
import './lib/iconfont.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
