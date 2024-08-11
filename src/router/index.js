import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import MainView from '@/views/MainView.vue';
import RoomsView from '@/views/RoomsView.vue';
import WellnessView from '@/views/WellnessView.vue';
import GymView from '@/views/GymView.vue';
import MassagesView from '@/views/MassagesView.vue';
import RestaurantsView from '@/views/RestaurantsView.vue';
import ContactView from '@/views/ContactView.vue';
import GolfView from '@/views/GolfView.vue';
import PremiumServices from '@/views/PremiumServices.vue';
import KingPalaceView from '@/views/KingPalaceView.vue';
import RelaxView from '@/views/RelaxView.vue';
import KingSuite from '@/views/KingsSuiteView.vue';
import GuestRoom from '@/views/GuestRoomView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView,
  },
  {
    path: '/rooms',
    name: 'rooms',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    component: RoomsView,
  },
  {
    path: '/rooms/king-suite',
    name: 'king-suite',
    component: KingSuite,
  },
  {
    path: '/rooms/guest-room',
    name: 'guest-room',
    component: GuestRoom,
  },
  {
    path: '/relax/wellness',
    name: 'wellness',
    component: WellnessView,
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: RestaurantsView,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactView,
  },
  {
    path: '/golf',
    name: 'golf',
    component: GolfView,
  },
  {
    path: '/premium-services',
    name: 'premium-services',
    component: PremiumServices,
  },
  {
    path: '/king-palace',
    name: 'king-palace',
    component: KingPalaceView,
  },
  {
    path: '/relax/gym',
    name: 'gym',
    component: GymView,
  },
  {
    path: '/relax/massages',
    name: 'massages',
    component: MassagesView,
  },
  {
    path: '/relax',
    name: 'relax',
    component: RelaxView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
