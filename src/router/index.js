import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import {users} from '../assets/users'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile'
import Admin from '../views/Admin';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path:'/admin',
    name:'Admin',
    component: Admin,
    meta : {
      requiresAdmin : true
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async(to,from,next)=>{

  // run below before each routing ... 

  const user = store.state.user;
  if (!user) {
    await store.dispatch('setUser',users[0]);
  }

  const isAdmin = false;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  // redirect to home if user is not admin
  if(requiresAdmin && !isAdmin) next({name:'Home'});
  else next();
})

export default router
