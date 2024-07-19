import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RegistrationView from '../views/RegistrationView.vue';
import Registration from '../components/RegistrationForm.vue';
import UserList from '../components/UserList.vue';
import Login from '../components/LoginForm.vue'; // Corrected import path

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/registerlogin', name: 'registrationlogin', component: RegistrationView },
    { path: '/register', name: 'register', component: Registration },
    { path: '/users', name: 'users', component: UserList },
    { path: '/login', name: 'login', component: Login },
  ],
});

export default router;
