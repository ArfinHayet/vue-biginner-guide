import { createRouter , createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import TaskDetails from "../views/TaskDetails.vue"

const routes = [
    { path:"/" , component : Home},
    { path: '/task/:id', component: TaskDetails, props: true }
]


export const router = createRouter({
  history: createWebHistory(),
  routes
})