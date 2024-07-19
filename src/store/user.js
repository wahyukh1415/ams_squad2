import { defineStore } from 'pinia';
import api from '../services/api';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    totalPages: 0,
    currentPage: 1,
  }),
  actions: {
    async registerUser(userData) {
      try {
        const endpoint = userData.role === 'BUYER' ? '/register-buyer' : '/register-seller';
        const response = await api.post(`/secured/user${endpoint}`, userData);
        console.log('User registered successfully:', response.data);  // Logging success response
        await this.fetchUsers();
        return response.data;
      } catch (error) {
        console.error('Error registering user:', error.response ? error.response.data : error.message);  // Logging error
        throw error;
      }
    },
    async fetchUsers(page = 1, size = 10) {
      try {
        const response = await api.get(`/secured/user/list?page=${page}&size=${size}`);
        console.log('API response:', response);  // Logging entire response
        if (response && response.data && response.data.data) {
          const usersData = response.data.data.data || [];  // Fallback to empty array if data is null
          this.users = usersData;
          this.totalPages = response.data.data.totalPage || 0;  // Fallback to 0 if totalPage is null
          this.currentPage = page;
        } else {
          console.error('Unexpected API response format:', response);
          throw new Error('Unexpected API response format');
        }
      } catch (error) {
        console.error('Error fetching users:', error.response ? error.response.data : error.message);  // Logging error
        throw error;
      }
    },
  },
});
