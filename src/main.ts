import { createApp } from 'vue'
import { createRouter, createWebHistory, RouterView } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

import 'uno.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(RouterView).use(router).mount('#app')
