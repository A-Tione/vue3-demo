import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Yang from './components/Yang.vue'
import Yang2 from './components/Yang2.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Yang},
    {path: '/yang2', component: Yang2},
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
