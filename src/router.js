import Vue from 'vue'
import Router from 'vue-router'
import TodoList from './components/AppToDo.vue'
import GoogleMap from './components/GoogleMap.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/GoogleMap',
      name: 'GoogleMap',
      component: GoogleMap
    },
    {
        path: '/about',
        name: 'about',
        component: About
      }
  ]
})