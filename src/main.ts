import './lib/ree.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.ts'
import './assets/iconfont.js'
import 'github-markdown-css'
import Markdown from '../src/components/Markdown.vue';

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component("Markdown", Markdown)
