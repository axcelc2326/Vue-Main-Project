import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ToDoList from '../views/ToDoList.vue'

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: '/', component: () => import('../views/Home.vue') },
//     { path: '/register', component: () => import('../views/Register.vue') },
//     { path: '/sign-in', component: () => import('../views/SignIn.vue') },
//     { path: '/feed', component: () => import('../views/Feed.vue') }
//   ]
// })

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ToDoList',
    name: 'ToDoList',
    component: ToDoList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
