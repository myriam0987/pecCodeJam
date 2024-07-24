import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'; // Asegúrate de importar tu tienda Vuex
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import RecreationReservations from '../views/RecreationReservations.vue';
import WorkReservations from '../views/WorkReservations.vue';

// Definición de las rutas
const routes = [
  { path: '/', component: Home, meta: { requiresAuth: true } },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/recreation-reservations', component: RecreationReservations, meta: { requiresAuth: true } },
  { path: '/work-reservations', component: WorkReservations, meta: { requiresAuth: true } },
];

// Creación del router
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Guard para verificar la autenticación antes de cada cambio de ruta
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
