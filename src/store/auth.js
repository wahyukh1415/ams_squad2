import { defineStore } from 'pinia';
import api from '../services/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),
  actions: {
    async loginUser(credentials) {
      try {
        const response = await api.post('/login', credentials);
        this.token = response.data.token;
        localStorage.setItem('token', this.token);
        api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        return response.data;
      } catch (error) {
        console.error('Error logging in:', error.response ? error.response.data : error.message);
        throw error;
      }
    },
  },
});
