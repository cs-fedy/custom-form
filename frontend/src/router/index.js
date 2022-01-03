import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Forms from '../views/Forms.vue'
import FormBuilder from '../views/FormBuilder.vue'
import FormPreview from '../views/FormPreview.vue'
// import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/Forms',
    name: 'Forms',
    component: Forms
  },
  {
    path: '/FormBuilder/:id',
    name: 'FormBuilder',
    component: FormBuilder
  },
  {
    path: '/Form/:id',
    name: 'FormPreview',
    component: FormPreview
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
