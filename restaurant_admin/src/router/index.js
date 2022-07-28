import Vue from 'vue';
import VueRouter from 'vue-router';

const register = () => import(/* webpackChunkName: "register" */ '@/views/customer/register.vue');
const login = () => import(/* webpackChunkName: "login" */ '@/views/customer/login.vue');
const restaurant = () => import(/* webpackChunkName: "restaurant" */ '@/views/restaurant/restaurant.vue');
const menu = () => import(/* webpackChunkName: "menu" */ '@/views/restaurant/menu.vue');
const order = () => import(/* webpackChunkName: "order" */ '@/views/restaurant/order.vue');
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/register',
    name: 'registerPage',
    component: register,
  },
  {
    path: '/login',
    name: 'loginPage',
    component: login,
  },
  {
    path: '/restaurant',
    name: 'restaurantPage',
    component: restaurant,
  },
  {
    path: '/menu/:id',
    name: 'memuPage',
    component: menu,
  },
  {
    path: '/order',
    name: 'orderPage',
    component: order,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
